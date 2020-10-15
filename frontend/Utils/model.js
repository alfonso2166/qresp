import { getServer, namesUtil, referenceUtil } from "./utils";

const convertStateToViewSchema = (state, serverInformation) => {
  const schema = {
    ...state.curatorInfo,
    ...state.referenceInfo,
    ...state.paperInfo,
    // PIs: state.paperInfo.PIs,
    // abstract: state.referenceInfo.abstract,
    // authors: state.referenceInfo.authors,
    // collections: state.paperInfo.collections,
    // publication: state.referenceInfo.publication,
    // doi: state.referenceInfo.doi,
    documentation: state.documentation,
    fileServerPath: state.fileServerPath,
    charts: state.charts,
    tools: state.tools,
    datasets: state.datasets,
    scripts: state.scripts,
    heads: state.heads,
    workflows: state.workflow,
  };

  return schema;
};

const convertViewSchemaToState = (schema) => {};

const convertStatetoReqSchema = (state, servers) => {
  const info = {
    ProjectName: state.referenceInfo.doi,
    doi: state.referenceInfo.doi,
    timeStamp: new Date().toLocaleString().replace(",", ""),
    notebookFile: state.paperInfo.notebookFile,
    notebookPath: state.paperInfo.notebookPath,
    fileServerPath: state.fileServerPath,
    gitPath: servers && servers.gitPath ? "Y" : "",
    downloadPath: servers && servers.downloadPath ? servers.downloadPath : "",
    insertedBy: { ...state.curatorInfo },
  };

  const reference = { ...referenceUtil.get(state.referenceInfo.publication) };
  reference["DOI"] = state.referenceInfo.doi;
  reference["URLs"] = state.referenceInfo.url;
  reference["publishedAbstract"] = state.referenceInfo.abstract;
  reference["kind"] = state.referenceInfo.kind;
  reference["title"] = state.referenceInfo.title;
  reference["authors"] = namesUtil.get(state.referenceInfo.authors);

  const schema = {
    PIs: namesUtil.get(state.paperInfo.PIs),
    collections: state.paperInfo.collections,
    tags: state.paperInfo.tags,
    license: state.license,
    documentation: { readme: state.documentation },
    workflow: {
      ...state.workflow,
      edges: state.workflow.edges.map((edge) => [edge.from, edge.to]),
    },
    charts: state.charts.map((chart) => {
      chart.number = chart.number.toString();
      return chart;
    }),
    schema: getServer() + "/schema_v1.2.json",
    scripts: state.scripts,
    tools: state.tools,
    datasets: state.datasets,
    heads: state.heads,
    info,
    reference,
  };

  return schema;
};

export {
  convertViewSchemaToState,
  convertStateToViewSchema,
  convertStatetoReqSchema,
};
