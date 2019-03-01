from setuptools import setup,find_packages

setup(
    name='qresp',
    version='1.1',
    url='http://qresp.org/',
    entry_points = {
        'console_scripts': ['qresp=project.__main__:main'],
    },
    license='GNU',
    author='Aditya Tanikanti, Marco Govoni',
    author_email='datadev@lists.uchicago.edu',
    description='Qresp "Curation and Exploration of Reproducible Scientific Papers" is a Python application that facilitates the organization, annotation and exploration of data presented in scientific papers. ',
    python_requires='>=3.4',
    packages=find_packages(),
    install_requires=[
        'flask_api',
        'flask',
        'flask_cors',
        'paramiko',
        'pymongo',
        'cffi',
        'flask-mongoengine',
        'Flask-Session',
        'Flask-WTF',
        'mongoengine',
        'cryptography',
        'jinja2',
        'jsonschema==2.6.0'
        'pyOpenSSL',
        'werkzeug',
        'itsdangerous',
        'python-dateutil',
        'expiringdict',
        'schedule',
        'wtforms',
        'flask-sitemap',
        'requests_oauthlib',
        'mongomock',
        'connexion[swagger-ui]',
        'coverage',
        'nose2'
      ],
    include_package_data=True
)
