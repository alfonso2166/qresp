import { useContext, useEffect } from "react";
import { Grid } from "@material-ui/core";

import Drawer from "../drawer";
import RadioInput from "../Form/RadioInput";
import { SelectInputField, TextInputField } from "../Form/InputFields";
import { SubmitAndReset } from "../../components/Form/Util";

import { getList } from "../../Utils/Scraper";

import { Formik, Form, useFormikContext } from "formik";
import * as Yup from "yup";

import ServerContext from "../../Context/Servers/serverContext";
import AlertContext from "../../Context/Alert/alertContext";
import SourceTreeContext from "../../Context/SourceTree/SourceTreeContext";

const FormField = ({ httpServers, fieldName }) => {
  const { values } = useFormikContext();

  if (values.connectionType == "http") {
    return (
      <SelectInputField
        id="connectionType"
        placeholder="Select a server from a list  or enter one"
        helperText="Select URL of remote server where paper content is organized and located. e.g. https://notebook.rcc.uchicago.edu/files/"
        name={fieldName}
        label="File Server"
        options={httpServers}
        freeSolo={true}
      />
    );
  } else {
    return (
      <TextInputField
        id="connectionType"
        placeholder="Enter zenodo record URL"
        name={fieldName}
        helperText="eg. https://zenodo.org/record/3981451"
        label="Zenodo"
      />
    );
  }
};

const LocationInfo = () => {
  const options = [
    {
      label: "File Server",
      value: "http",
    },
    {
      label: "Zenodo",
      value: "zenodo",
    },
  ];

  const { httpServers, setSelectedHttp } = useContext(ServerContext);
  const { setAlert } = useContext(AlertContext);
  const { setTree, openSelector } = useContext(SourceTreeContext);

  return (
    <Drawer heading="Where is the paper">
      <Formik
        initialValues={{
          connectionType: "http",
          dataServer: "",
        }}
        validationSchema={Yup.object({
          connectionType: Yup.string().required("Required"),
          dataServer: Yup.string()
            .required("Required")
            .url("Please enter a valid url"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          getList(values.dataServer, values.connectionType, true)
            .then((el) => {
              setSelectedHttp(el.details);
              // setTree(el.files);
              openSelector();
            })
            .catch((err) => {
              console.error(err);
              setAlert(
                "Error",
                "There was an error retrieving data from the url provided, please check the URL and try again",
                null
              );
            });
        }}
      >
        <Form>
          <Grid direction="column" container spacing={1}>
            <Grid item>
              <RadioInput
                name="connectionType"
                helperText="Select location type of the data source"
                options={options}
                row={true}
              />
            </Grid>
            <Grid item>
              <FormField httpServers={httpServers} fieldName="dataServer" />
            </Grid>
            <Grid item>
              <SubmitAndReset submitText="Search" />
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Drawer>
  );
};

export default LocationInfo;
