# PRI 22/23 - Exam

- Questions denoted with a **Q** are present in the [study guide](https://docs.google.com/document/u/1/d/e/2PACX-1vTjdHdtrahXgr26A92oW9aQsf1YpoTUoXeL3p-g-xnDHff-QzHIyKPRK8My1RnWCMcmmNBRLh_I6D7v/pub) provided by the teacher.
- Questions denoted with a **MQ** are questions that I've gathered from various sources.

## Information processing

### MQ : Information processing and retrieval tasks?

<br>

- Data Ingestion
  - Collect data
  - Describe data
  - Move data
- Data Transformation
  - Data modeling
  - Data migration
  - Pipeline orchestration
- Data Optimization
  - Select, export, assesment

<br>

### MQ : Components of information processing/retrieval?

<br>

Components of information processing

- Data sources, provenance and datasets
- Data acquisition and data exploration
- Data pipelines
- Data processing and extraction
- Data characterization

Components of information retrieval

- Architecture of IR Systems: indexing and retrieval processes
- IR Models: ranking, boolean model, vector space model
- Evaluation in IR: methods and algorithms
- Web IR: link analysis, classic algorithms
- Tentative: Entity-Oriented Search, User Interfaces for Search, Applications

<br>

### Q : Distinguish between data, metadata, and information

<br>

| Data | Metadata | Information |
| ---- | -------- | ----------- |
| measurement of something in a scale | "data about data" | data with context/meaning |

<br>

### Q : Identify and describe the phases of a typical information lifecycle.

<br>

Four phases of information lifecycle (**OTPU**):
- **O**ccurrence - discover, design, author, etc.
- **T**ransmission - networking, acessing, retrieving, transmitting, etc.
- **P**rocessing/Management - collecting, validating, storing, modifying, filtering, etc.
- **U**sage - monitoring, planning, forecasting, etc.

<br>

### MQ : Different value in data

<br>

**Direct** - data provides value by feeding automated systems, e.g. product recommendations systems.
**Indirect** - data provides value by influencing human decisions, e.g. risk analysis.

<br>

### MQ : How to increase the value of data?

<br>

5 ways to increase the value of data(**MCCSE**):

- **M**ake data avaliable - simply make previously unavailable data available.
- **C**ombine data - combine data from different sources.
- **C**lean data - eliminate problems such as incomplete valuies, duplicates, etc.
- **S**tructure data - provide structure to unsctructured data.
- **E**nrich data - complement existing data with data from other sources.

<br>

### Q : Describe the challenges of data-intensive applications.

<br>

- the amout of data available
- the complexity of the data
- the speed at which the data changes

<br>

### MQ : Describe the three data stages:

<br>

- **Raw** - focus on data discovery, the primary goals are ingestion, understanding, and metadata generation.
    * What kind of records are in the data?
    * How are record fields encoded?
- **Refined** - focus on data preparation, for further exploration. Tasks include:
    * Removing unwanted parts
    * Reshaping poorly formatted data
    * Establishing relationships between datasets
    * Assess data quality issues
- **Production** - focus on integrating the data into production processes or products.

<br>

### Q : Describe typical data processing patterns, pipelines and frameworks, e.g. ETL, EtlT, OSEMN.

<br>

- **ETL** - Extract, Transform, Load
  * **E**xtract, involves extracting data from a source system.
  * **T**ransform, a series of operations or transformations applied to the extracted data.
  * **L**oad, involves loading the transformed data into a target system.

- **ELT** - Extract, Load, Transform
  * Recent evolution of ETL, where the transformation is performed after the data is loaded into the target system.
  * More suitable for division of responsibilities in multidisciplinary teams.

- **ElT** - Extract, Load, Transform
  * Introduces a small transformation step before loading, typically associated with data cleaning tasks.

- **OSEMN** - Obtain, Scrub, Explore, Model, Interpret
  * **O**btain, gathering data.
  * **S**crub, clean, arrange, prepare data.
  * **E**xplore, observe, experiment, visualize data.
  * **M**odel, create a statistical model of the data.
  * I**N**terpret drawn conclusions, evaluating and communicate results.

Although presented as a sequence, the steps are often iterative, and the order may vary.

<br>

### MQ : Describe the concepets of Open Data and FAIR Data.

<br>

- **Open Data** - the idea that data should be freely available to everyone to use, modify, and republish for any purpose.

- **FAIR Data** - a set of principles to make data **F**indable, **A**ccessible, **I**nteroperable, and **R**eusable.

<br>

### Q : Describe the challenges associated with data processing.

<br>

Data sources can vary in terms of (**OIVCL**):

- **O**wnership - know ahat data you have access to and what can be done with it.
- **I**ngestion - how do you get the data and in what form is it in
- **V**olume
- **C**leanliness and validity
- **L**atency

What to consider when selecting data?

- Is the author trustworthy?
- Is the data regularly updated?
- Does the data include information about how, when, and where it was acquired?
- Does it seem plausible through observation?

Data formats

- Data formats used by individual applications are known as proprietary formats.
- Proprietary formats can be open if its specifications are publicly available.

Data encoding

- Data can be encoded in memory, in specific structures, such as objects, arrays, or lists.
- Data can be encoded in self-contaided sequences of bytes, for file storage or transmission over a network. e.g. JSON, XML, CSV, etc.
<br>
- The process of translating from the in-memory representation to the byte sequence is called **enconding** (serialization) and the inverse process is called **decoding** (deserialization).
- In general not adequate in data pipelines, as it is limited to a single programming language, reduces interoperability, lowers performance, etc.

JSON, XML serialization vs Binary serialization

- JSON and XML are text-based formats, which are human-readable and can be easily edited.
- Limitations include: limited support for binary data(e.g. images), ambiguous representation of numbers, etc.
- Binary serialization is more compact and faster to parse, and is a commom solution for within organization data exchange.

<br>


### Q : Identify and describe challenges and techniques related to: data cleaning, data preparation, and data presentation.

<br>

Data Quality

- Commom problems affecting data quality (**MIPDO**):
  - **M**issing data - due to error, specific meaning(e.g. n/a, 0, NULL)
  - **I**nconsistent values - distinct timezone in time/dates, multiple units of measure, etc.
  - **P**recision problems - rouding errors, etc.
  - **D**uplicate data - due to error, or can be valid data as well.
  - Many **O**ther - text encoding, mislabelled data, incomplete data, outdated data, etc.

Descrtiptive statistics techniques

- **Central tendency** - mean, median, mode
- **Dispersion** - range, variance, standard deviation
- Don't rely on descriptive statistics alone, include exploratory visualization in the process.

Outliers

- Outliers are data points that are distant from other observations.
- It is necessary to understand the context of the data to determine if an outlier is a valid data point or an error.

Data preparation

- Data preparation, captures activities such as:
  - Understanding what data is available
  - Choose the data to use and what level of detail
  - Understand how to combine data from different sources
  - Deciding how to distill the resulsts to a size and shape that enables the following steps
- Common data prepartion tasks (**CTSIR**):
  - Data **C**leaning - identify and fix data quality issues
  - Data **T**ransformation - transform data to improve analysis or manipulation. Some operations include:
    - Normalization of values to a comparable scale
    - Scaling values to the same range
    - Non-linear transformations to deal with skewness
    - Discrization or binning
    - All operations over the data introduce layers of distortion and bias. Documentation is key.
  - **Synthesis** of data - create new attributes derived from existing data.
  - Data **Int**egration - combine data from multiple sources
    - Complexity differs depending on the data sources, from using join operators on a single databasee to more complex data integration tasks.
  - Data **R**eduction or Selection - reduce the size of the data set.
    - It may necessary due to several reasons:
      - Data is not relevant
      - Data is outdated
      - Data volume exceed existing capacity to process it
      - Existing precision is excessive
    - Techinques for performing data reduction (**FSA**):
      - Data **F**iltering
        - Deterministic nature: e.g. remove data from a specific time period, remove all references to a specific keyword, etc.
        - Data **S**ampling
          - Non-deterministic nature: randomly select a subset of the data
          - Need to ensure that resulting sample is representative of the original data.
          - Important to analyse distribution of data before and after sampling.
      - Data **A**ggregation
        - Reduce excessive detail in data

Visualization

- Visualization is a key part of the data analysis process.
- Visualization in data preparation can be applied:
  - **Before** the application of computing methods, to **explore** properties of the data
  - **During** the application of computing methods, to **inspect** how the data is being processed
  - **After** the application of computing methods, to **evaluate** the quality of the results
- Visualization can be into two categories, each with a different purpose:
  - **Exploration** - done early in the process, to understand the data
  - **Explanation** - done later in the process, to communicate and support the results
- Data visualization examples:
  - Bar chart
  - Stacked bar chart
  - Box Plot
  - Scatter Plot
  - Histogram
  - Line graph
  - Wordcloud

### Q: Describe the importance of data pipelines and how Makefiles can be used to implement them.

<br>

Data pipeline
- Sets of processes that move and transform data from one various sources to various destinations, where new value can be derived.
- Data collection and preparation is usually an ad-hoc and exploratory process, easily leading to a dispersion in threads and acrtivities. Adoption of a pipeline management system (e.g: Makefiles) and a complete and detailed documentation of the process is key to ensure reproducibility and scalability.

Characteristics of data pipelines (**RSM**):
- **R**eliable - work as expected even in the face of adversity
- **S**calable - cope with increased load in a manageable way
- **M**aintainable - evolve through time and teams

Data Flow Diagrams (DFD)

- Used to represent flow of data from external entities to the system, show how data moves from one process to another, and data's logical storage.
- Notation includes four symbols:
  - **Squares** - Represent external **entities**
  - **Rounded Rectangles** - represent **processes**
  - **Arrows** - represent data **flow**
  - **Open-ended Rectangles** - represent data **stores**

Managing data pipelines with Makefiles

- A data processing project is typically a fragmend process, involving multiple operations, data storagesm files, folders, formats, etc.
- Make is a software tool that controls the execution of commands to derive target files, based on the existence(or change) of other files(**dependencies**) and the execution of operations(**recipes**).
- Make is language agnostic, and follows a declarative programming paradigm.
- Makefile is a text file where Make execution rules and dependencies are defined.


### MQ : 

## IR tasks and systems

### What is the difference between information retrieval and data retrieval?

### Give examples of IR and data retrieval systems.

### Give some examples of retrieval tasks evaluated in TREC.

### What are the modules of an IR system?


## IR concepts

## Vector model

## Evaluation

## Web search

## Link analysis

## Query processing

## Entity-oriented search

## Search user interfaces

##

## Learning to Rank and Neural Information Retrieval

##