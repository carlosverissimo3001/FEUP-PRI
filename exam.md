# PRI 22/23 - Exam

- Questions denoted with a **Q** are present in the [study guide](https://docs.google.com/document/u/1/d/e/2PACX-1vTjdHdtrahXgr26A92oW9aQsf1YpoTUoXeL3p-g-xnDHff-QzHIyKPRK8My1RnWCMcmmNBRLh_I6D7v/pub) provided by the teacher.
- Questions denoted with a **OQ** are questions that I've gathered from various sources. These include:
  - [Exam Flashcards 1](https://quizlet.com/pt/661206106/pri-exam-flash-cards/)
  - [Exam Flashcards 2](https://quizlet.com/pt/663165956/pri-flash-cards/)

---

## Information processing

### OQ : Information processing and retrieval tasks


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


### OQ : Components of information processing/retrieval

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

### Q : Distinguish between data, metadata, and information

| Data | Metadata | Information |
| ---- | -------- | ----------- |
| measurement of something <br> in a scale | "data about data" | data with context/meaning |

### Q : Identify and describe the phases of a typical information lifecycle.

Four phases of information lifecycle (**OTPU**):
- **O**ccurrence - discover, design, author, etc.
- **T**ransmission - networking, acessing, retrieving, transmitting, etc.
- **P**rocessing/Management - collecting, validating, storing, modifying, filtering, etc.
- **U**sage - monitoring, planning, forecasting, etc.

### OQ : Different value in data

**Direct** - data provides value by feeding automated systems, e.g. product recommendations systems.
**Indirect** - data provides value by influencing human decisions, e.g. risk analysis.

### OQ : How to increase the value of data?

5 ways to increase the value of data(**MCCSE**):

- **M**ake data avaliable - simply make previously unavailable data available.
- **C**ombine data - combine data from different sources.
- **C**lean data - eliminate problems such as incomplete valuies, duplicates, etc.
- **S**tructure data - provide structure to unsctructured data.
- **E**nrich data - complement existing data with data from other sources.

### Q : Describe the challenges of data-intensive applications.

- the amout of data available
- the complexity of the data
- the speed at which the data changes

### OQ : Describe the three data stages:

- **Raw** - focus on data discovery, the primary goals are ingestion, understanding, and metadata generation.
    * What kind of records are in the data?
    * How are record fields encoded?
- **Refined** - focus on data preparation, for further exploration. Tasks include:
    * Removing unwanted parts
    * Reshaping poorly formatted data
    * Establishing relationships between datasets
    * Assess data quality issues
- **Production** - focus on integrating the data into production processes or products.

### Q : Describe typical data processing patterns, pipelines and frameworks, e.g. ETL, EtlT, OSEMN.

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

### OQ : Describe the concepets of Open Data and FAIR Data.

- **Open Data** - the idea that data should be freely available to everyone to use, modify, and republish for any purpose.
- **FAIR Data** - a set of principles to make data **F**indable, **A**ccessible, **I**nteroperable, and **R**eusable.

### Q : Describe the challenges associated with data processing.

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

- The process of translating from the in-memory representation to the byte sequence is called **enconding** (serialization) and the inverse process is called **decoding** (deserialization).
- In general not adequate in data pipelines, as it is limited to a single programming language, reduces interoperability, lowers performance, etc.

JSON, XML serialization vs Binary serialization

- JSON and XML are text-based formats, which are human-readable and can be easily edited.
- Limitations include: limited support for binary data(e.g. images), ambiguous representation of numbers, etc.
- Binary serialization is more compact and faster to parse, and is a commom solution for within organization data exchange.


### Q : Identify and describe challenges and techniques related to: data cleaning, data preparation, and data presentation.

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

### OQ : Data Models

4 main data models:
- **Relation Model**
  - data is organized in relations (tables in SQL), where each relation is an unordered collection of tuples (rows in SQL)
  - common criticism: the need of a translation layer between "tables, rows and columns" and the "objects" used in object-oriented programming
  - better suited to support joins, N-1, and N-N relationships.
- **Document Model**
  - data is organized as single instances (documents)
  - advantages include:
    - schema flexibility
      - no schema (**schema-less**) means that arbitrary keys and values can be added to a document and, when reading, clients have no guarantees as to what fields to expect.
      - **schema-on-read** - the structure is enforced when reading the data, at code level.
      - **schema-on-write** - the structure is enforced by the database, the traditional relational approach.
    - better performance due to locality, i.e. related data is stored together
    - the data model is closer to the application's data structures, in some cases.
  - document model is appopriate when the application has mostly 1-N relationships, i.e, tree-like structures, or no relationships at all.
- **Proprietary Graph Models**
  - vertices (also known as nodes or entities) and edges (also known as relationships or arcs).
  - provide a consistent way of storign completly different types of data in a single datastore.
  - natural to use when many-to-many relationships are very common, and the connections with the data are complex.
- **Triple-Store Model**
  - all information is stored in the form of three-part statements: (subject, predicate, object). For example: (Maria, enrolled, PRI)

Summary of data models:

- The **relation model** is the most common widely used approch.
- Two main alternatives fall under the NO-SQL umbrella:
  - With **document model**, data is mapped to self-contained documents, and relationships between documents are rare.
  - With **graph databases**, data is separated in independent units and, potentially, everything is related to everything.

### OQ : Unix Philosophy

- **Unix Philosophy** encapsulates a set of design principles that became popular in the 1970s, when Unix was first developed.
- Four main design principles (**MEDU**):
  - **M**ake each program do one thing well.
  - **E**xpect the output of every program to become the input to another, as yet unknown, program.
  - **D**esign and build software, even operating systems, to be tried early, ideally within weeks.
  - **U**se tools in preference to unskilled help to lighten a programming task, even if you have to detour to build the tools and expect to throw some of them out after you've finished using them.

---

## IR tasks and systems

### OQ : Definition of Information Retrieval (IR)

Information retrieval (IR) is finding material (usually documents) of an unstructured nature (usually text) that satisfies an information need from within large collections (usually stored on computers).

### Q : What is the difference between information retrieval and data retrieval?

|     | Information Retrieval (IR Systems) | Data Retrieval (Databases) |
| --- | --- | --- |
| **Motivation** | Deals with the organization, storage, retrieval, and evaluation of information from document repositories | Deals with obtaining data from a database management system such as ODBMS|
| **Data Type** | Text | Numbers, short strings |
| **Foundation** | Probabilistic/statistics based | Algebraic/logic based |
| **Data Structure** | Not always well-structured and is <br> semantically ambiguous| Well-defined structure and semantics |
| **Queries** | Free text queries | Structured query language |
| **Search Paradigm** | Ranked Retrieval - results are more or less relevant for a given information need. | Boolean Retrieval - resuls are set based, i.e, results are true or false for a given condition |
| **Evaluation** | Effectiveness (user satisfaction) | Efficiency |
| **User** | Non-technical person | Programmer |

### Q : Give examples of IR and data retrieval systems.

Information Retrieval Systems:
- Search engine
  - Example queries:
    - [feup enrolled students ABC 22/23]
    - [weather porto site:pt]
- Email system
  - Example queries:
    - [from: "John Smith" subject: "meeting"]

Data Retrieval Systems:
- Bank transaction system
  - Example queries:
    - All bank account transactions between account A and account B, within a given date range, ordered by date.
- Online shopping system
  - Example queries:
    - All products with a price lower than 10€, ordered by price.

### OQ : Dimensions of IR:

Content, Applications, Tasks

| Content | Applications | Tasks |
| --- | --- | --- |
| Text | Web-search | Ad hoc search |
| Images | Vertical search | Filtering |
| Video | Enterprise search | Classification |
| Scanned docs | Desktop search | Question Answering |
| Audio | Forum search | |
| | P2P search | |
| | Literature search| |

### OQ : IR issues

- **Relevance** - How to measure the relevance of a document to a query?
  - Simple definition: a document is relevant if it contains information that a person was looking for when they issued the query to a serach engine.
- **Evaluation** - How to evaluate the performance of an IR system?
  - Precision and recall are two examples of widely used metrics.
- **User and information needs** - How to represent the information need of a user?

### OQ : Search engines issues

Five key issues (**PISAS**):

- **P**erformance - Efficient search and indexing
- **I**ncorporating new data - Coverage and freshness
- **S**calability - Growing with data and users
- **A**daptability - Tuning for application and user needs
- **S**pecific problems - Spam, privacy, security, etc.

### OQ : IR tools

- Google, Bing, Yahoo, DuckDuckGo, etc.

### Q : Give some examples of retrieval tasks evaluated in TREC.

Four examples of tasks evaluated in TREC:

- Health Information track
- News track
- Podcast track
- Precision Medicine track

### Q : What are the modules of an IR system?

- **Crawler**
  - A method of text acquisition that identifies and acquires documents for search engine.
  - Can be of many types: web, enterprise, desktop
- **Indexer** - Builds an index from the documents
- **Query parsing and expansion** - Parses the user query and expands it
- **Retrieval and ranking** - Retrieves the most relevant documents

### OQ : Stages of the indexing process

- **Text acquisition** - identifies and stores documents for indexing. Examples:
  - **Crawler**: Identifies and acquires documents for search engine
  - **Feeds**: Real‐time streams of documents
  - **Conversion**: Convert variety of documents into a consistent text plus metadata format
  - **Document data store**: Stores text, metadata, and other related content for documents
- **Text transformation** - transforms documents into index terms or features. Examples:
  - **Parser**: processing the sequence of text tokens in the document to recognize structural elements
  - **Stopping**: Remove common words
  - **Stemming**: Group words derived from a common stem
  - **Link Analysis**: Makes use of links and anchor text in web pages
  - **Information Extraction**: Identify classes of index terms that are important for some applications
  - **Classifier**: Identifies class‐related metadata for documents
- **Index creation** - takes index terms and creates data structures (indexes) to support fast searching. Examples:
  - **Document Statistics**: Gathers counts and positions of words and other features
  - **Weighting**: Computes weights for index terms
  - **Inversion**: Converts document‐term information to term‐document for indexing
  - **Index Distribution**: Distributes indexes across multiple computers and/or multiple sites

### OQ : Stages of the query process

- **User Interaction** - supports creation and refinement of query, display of results. Examples:
  - Query input: Provides interface and parser for query language
  - Query transformation: Improves initial query, both before and after initial search
  - Results output: Constructs the display of ranked documents for a query
- **Ranking** - uses query and indexes to generate ranked list of documents. Examples:
  - Scoring: Calculates scores for documents using a ranking algorithm
  - Performance optimization: Designing ranking algorithms for efficient processing
  - Distribution: Processing queries in a distributed environmnent
- **Evaluation** - monitors and measures effectiveness and efficiency (primarily offline). Examples:
  - Logging: Logging user queries and interaction is crucial for improving search effectiveness and efficiency
  - Ranking analysis: Measuring and tuning ranking effectiveness
  - Performance Analysis: Measuring and tuning system efficiency

## Evaluation

### Q : What is… precision, recall, interpolated precision, accuracy, f-measure, PRC?

- **Precision** - The fraction of retrieved documents that are relevant
  - Formulas:
    -  `precision = # relevant docs retrieved / # retrieved docs`
    -  `precision = true positives / (true positives + false positives)`
- **Recall** - The fraction of relevant documents that are retrieved
  - Formulas:
    -  `recall = # relevant docs retrieved / # relevant docs`
    -  `recall = true positives / (true positives + false negatives)`
- **Interpolated precision** - Where you pick a recall level r and for all recall levels P(r') >= P(r), where P(r) is the precision at rank r. It is the best precision you can achieve.
- **Accuracy** - Fraction of classifications that are correct (not useful for IR)
  - Formula: `#(true positives + true negatives) / #(tp + fp + fn + tn)`
  - Not useful in IR
- **F-Measure** - Weighted harmonic mean of precision and recall.
  - Formula : `F(B=1) = 2PR/(P+R)`
  - It is possible to emphasize Precision (β < 1) or Recall (β > 1)
  - Not widely used in IR

- **PRC** - Precision-Recall Curve
  - Graph originated from Interpolated Precision

Precision and recall are set based measures, they are computed over unordered sets of documents.

### Q : What is… precision at k, R-precision?

- **Precision at k**
  - Calculated for only K documents. Documents ranked lower than K are ignored.
  - What matters are high quality results on the first page. This leads to measuring precision at fixed low levels of retrieved results
  - Suppose your system retrieves 10 documents, where the relevant ones are at ranks 1,3,6,7,9 and you want to know how 'well' your system does until rank 5. So you compute your Precision@5 = 2/5

- **R-precision**
  - Precision at the Rth position in the ranking of results for a query that has R relevant documents.

  - Suppose in your collection there are 100 documents in total, 30 of which are relevant (R=30), the rest irrelevant. So you retrieve the first 30 documents (because 30 are relevant in total in your collection) and, say, 10 of them are relevant (r=10). Your R-Precision is then 10/30=1/3.

### OQ : Average precision and Mean Average Precision

- **Average precision** - provides a single-figure measure of quality across recall levels for a single query
  - It's the average of the precision values obtained for the set of top-k documents for all k such that the document at rank k is relevant.

- **Mean Average Precision** - Given a set of queries, is the mean over the AvP values. This is one of the most commonly used measures in IR.

### OQ : Efficiency vs Effectiveness

- **Efficiency** - Measures how quickly a search system provides an answer.
- **Effectiveness** - Measures the ability of a search system to find the right information.

### OQ : User centered and online evaluation

Three main techniques for user centered evaluation:
- **Observation studies** - Observing users as they interact with the system, in a controlled environment
- **Server-side query logs** - Collecting query logs from the server
- **Client-side query logging tools** - To study interaction patterns.
- **A/B testing** - Run multiple experiments with different versions of the system and compare the results.

### OQ : Efficieny metrics:

Six main efficiency metrics:

- **Elapsed indexing time** - amount of time necessary to build a document index
- **Indexing processor time** - CPU seconds used to build a document index
- **Query throughput** - Number of queries processed per second
- **Query latency** - Amount of time between the issue of a query and the response
- **Indexing temporary space** - amount of temporary disk space used while creating an index
- **Index size** - Amount of storage needed to store the index files

### Q : Name the components of a test collection.

- To measure the effectiveness of an IR system, we need a test collection.
  - A document collection
  - A test suite of information needs, expressible as queries
  - A set of relevance judgements, typically a binary assessment of either relevant or not relevant for each query-document pair

- Some test collections:
  - CACM - Titles and abstracts of articles from Communications of the ACM (CACM)
  - AP - Associated Press newswire documents
  - GOV2 - Web documents from the US government

### Q : Why is a set of relevance judgements considered a “ground truth” for IR?

- The relevance judgements are considered a ground truth because they are the only way to measure the effectiveness of an IR system.


## IR concepts

### Q : What is… a document, a collection, a term, a bag of words?

**Document**
- Can be web page, email, news article, book, etc.
- Significant text content
- Some structure, e.g. title, body, etc.

**Collection** - Refers to the group of documents over which we perform retrieval as the (document) collection

**Term** - Terms are the indexed units, they are usually words

**Bag of words** - Model in which the exact order of words is not important, and is ignored, only the presence of words is considered

**Database records** - Collection of related fields, populated with data


### OQ : Incidence matrix

- **Incidence matrix** - A matrix that represents the relationship between documents and terms. It is a binary matrix, where the rows are the documents and the columns are the terms. The value of a cell is 1 if the term is present in the document, 0 otherwise.

### OQ : How to measure the effectivness of a serach system?

We need three things:
- A document collection
- A test suite of information needs, expressible as queries
- A set of relevance judgments, typically a binary assessment of either relevant or non-relevant for each query-document pair

### Q : Define stemming and lemmazation.


### Q : What is… an inverted index, a vocabulary, a postings list?

**Inverted index** - An index that maps terms to the documents in which they occur

**Vocabulary** - Dictionary of terms. Also known as lexicon

**Postings list** - List of documents in which a term occurs

### Q : What is… an information need, a query, a results list?

**Information need** - The topic about which the user wants to find information

**Query** - What the user conveys to the computer in an attempt to communicate the information need

**Results list** - The list of documents returned by the system in response to a query

### Q : What is a relevant result in a results list, i.e, how to assess relevance?

Relevance is assessed **relative to an information need**, not to the query.

The quality of information that indicates the information makes a difference in a decision.

A document is relevant if it is one that the user perceives as containing information of value with respect to their personal information need



## Vector model

## Web search

## Link analysis

## Query processing

## Entity-oriented search

## Search user interfaces

##

## Learning to Rank and Neural Information Retrieval

##