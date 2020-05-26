from setuptools import setup,find_packages

setup(
    name='qresp',
    version='1.2.1',
    url='http://qresp.org/',
    entry_points = {
        'console_scripts': ['qresp=project.__main__:main'],
    },
    license='GNU',
    author='Aditya Tanikanti, Marco Govoni, Sushant Bansal',
    author_email='datadev@lists.uchicago.edu',
    description='Qresp "Curation and Exploration of Reproducible Scientific Papers" is a Python application that facilitates the organization, annotation and exploration of data presented in scientific papers. ',
    python_requires='>=3.5',
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
        'mongoengine==0.19.0',
        'cryptography',
        'jinja2',
        'jsonschema==2.6.0',
        'pyOpenSSL',
        'werkzeug==0.16.0',
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
        'nose2',
        'lxml',
        'gunicorn'
      ],
    include_package_data=True
)
