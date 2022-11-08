# AIMS (Academic Information Management System)

## Interface

This is an interface for the AIMS project.
It exposes a SOAP API with the getSubjects functionality.

## How to run

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

### Run

- Clone the repository
- Run `npm install`

To run the server, run `npm start:server`.

To run the client, run `npm start:client`.

## Response example

```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" >
  <soap:Body>
    <SubjectsResponse>
      <subjects>
        <subjectId>1</subjectId>
        <subjectName>Introducción a la criptografía y la seguridad informática</subjectName>
        <subjectCode>1053486524-B</subjectCode>
        <careerId>1</careerId>
        <curriculum>curriculum-1</curriculum>
        <credits>3</credits>
        <groups>
          <groupId>cca4c365-befb-4d4b-bd42-d9b92384a57d</groupId>
          <maxCapacity>25</maxCapacity>
          <teacherId>fd6644f8-f987-4da4-93c3-8b25e3a37f62</teacherId>
          <schedules>
            <scheduleId>1</scheduleId>
            <day>1</day>
            <startTime>07:00:00</startTime>
            <endTime>09:00:00</endTime>
            <classroom>103</classroom>
            <building>401</building>
          </schedules>
          <schedules>
            <scheduleId>2</scheduleId>
            <day>3</day>
            <startTime>07:00:00</startTime>
            <endTime>09:00:00</endTime>
            <classroom>103</classroom>
            <building>401</building>
          </schedules>
        </groups>
        <groups>
          <groupId>d0b5c4b5-5b1f-4b2b-9b2c-9b2c9b2c9b2c</groupId>
          <maxCapacity>25</maxCapacity>
          <teacherId>fd6644f8-f987-4da4-93c3-8b25e3a37f62</teacherId>
          <schedules>
            <scheduleId>3</scheduleId>
            <day>1</day>
            <startTime>09:00:00</startTime>
            <endTime>11:00:00</endTime>
            <classroom>115</classroom>
            <building>453</building>
          </schedules>
          <schedules>
            <scheduleId>4</scheduleId>
            <day>3</day>
            <startTime>09:00:00</startTime>
            <endTime>11:00:00</endTime>
            <classroom>115</classroom>
            <building>453</building>
          </schedules>
        </groups>
      </subjects>
      <subjects>
        <subjectId>2</subjectId>
        <subjectName>Ingeniería de Software I</subjectName>
        <subjectCode>1053486524-C</subjectCode>
        <careerId>1</careerId>
        <curriculum>curriculum-1</curriculum>
        <credits>3</credits>
        <groups>
          <groupId>d0b5c4b5-5b1f-4b2b-9b2c-9b2c9b2c9b2d</groupId>
          <maxCapacity>30</maxCapacity>
          <teacherId>fd6644f8-f987-4da4-93c3-8b25e3a37f62</teacherId>
          <schedules>
            <scheduleId>5</scheduleId>
            <day>2</day>
            <startTime>07:00:00</startTime>
            <endTime>09:00:00</endTime>
            <classroom>204</classroom>
            <building>401</building>
          </schedules>
          <schedules>
            <scheduleId>6</scheduleId>
            <day>4</day>
            <startTime>07:00:00</startTime>
            <endTime>09:00:00</endTime>
            <classroom>204</classroom>
            <building>401</building>
          </schedules>
        </groups>
      </subjects>
      <subjects>
        <subjectId>3</subjectId>
        <subjectName>Ingeniería de Software II</subjectName>
        <subjectCode>1053486524-D</subjectCode>
        <careerId>2</careerId>
        <curriculum>curriculum-1</curriculum>
        <credits>4</credits>
        <groups>
          <groupId>d0b5c4b5-5b1f-4b2b-9b2c-9b2c9b2c9b2e</groupId>
          <maxCapacity>30</maxCapacity>
          <teacherId>fd6644f8-f987-4da4-93c3-8b25e3a37f62</teacherId>
          <schedules>
            <scheduleId>7</scheduleId>
            <day>2</day>
            <startTime>14:00:00</startTime>
            <endTime>16:00:00</endTime>
            <classroom>403</classroom>
            <building>454</building>
          </schedules>
          <schedules>
            <scheduleId>8</scheduleId>
            <day>4</day>
            <startTime>14:00:00</startTime>
            <endTime>16:00:00</endTime>
            <classroom>403</classroom>
            <building>454</building>
          </schedules>
        </groups>
      </subjects>
      <subjects>
        <subjectId>4</subjectId>
        <subjectName>Arquitectura de Software</subjectName>
        <subjectCode>1053486524-E</subjectCode>
        <careerId>1</careerId>
        <curriculum>curriculum-1</curriculum>
        <credits>8</credits>
        <groups>
          <groupId>2d3c0e52-a09c-47db-8c42-8028f6e9856c</groupId>
          <maxCapacity>40</maxCapacity>
          <teacherId>fd6644f8-f987-4da4-93c3-8b25e3a37f62</teacherId>
          <schedules>
            <scheduleId>11</scheduleId>
            <day>2</day>
            <startTime>11:00:00</startTime>
            <endTime>13:00:00</endTime>
            <classroom>204</classroom>
            <building>401</building>
          </schedules>
          <schedules>
            <scheduleId>12</scheduleId>
            <day>4</day>
            <startTime>11:00:00</startTime>
            <endTime>13:00:00</endTime>
            <classroom>204</classroom>
            <building>401</building>
          </schedules>
        </groups>
        <groups>
          <groupId>a1933e14-95c6-4add-9a74-2cc0b83d554d</groupId>
          <maxCapacity>40</maxCapacity>
          <teacherId>fd6644f8-f987-4da4-93c3-8b25e3a37f62</teacherId>
          <schedules>
            <scheduleId>9</scheduleId>
            <day>2</day>
            <startTime>09:00:00</startTime>
            <endTime>11:00:00</endTime>
            <classroom>204</classroom>
            <building>401</building>
          </schedules>
          <schedules>
            <scheduleId>10</scheduleId>
            <day>4</day>
            <startTime>09:00:00</startTime>
            <endTime>11:00:00</endTime>
            <classroom>204</classroom>
            <building>401</building>
          </schedules>
        </groups>
      </subjects>
    </SubjectsResponse>
  </soap:Body>
</soap:Envelope>
```
