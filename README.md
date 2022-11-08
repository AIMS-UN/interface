# AIMS

## Interface for subject microservice

## Response example

```json
[
  {
    "subjectId": "1",
    "subjectName": "Introducci├│n a la criptograf├¡a y la seguridad inform├ítica",
    "subjectCode": "1053486524-B",
    "careerId": "1",
    "curriculum": "curriculum-1",
    "credits": "3",
    "groups": [
      {
        "groupId": "cca4c365-befb-4d4b-bd42-d9b92384a57d",
        "maxCapacity": "25",
        "teacherId": "fd6644f8-f987-4da4-93c3-8b25e3a37f62",
        "schedules": [
          {
            "scheduleId": "1",
            "day": "1",
            "startTime": "07:00:00",
            "endTime": "09:00:00",
            "classroom": "103",
            "building": "401"
          },
          {
            "scheduleId": "2",
            "day": "3",
            "startTime": "07:00:00",
            "endTime": "09:00:00",
            "classroom": "103",
            "building": "401"
          }
        ]
      },
      {
        "groupId": "d0b5c4b5-5b1f-4b2b-9b2c-9b2c9b2c9b2c",
        "maxCapacity": "25",
        "teacherId": "fd6644f8-f987-4da4-93c3-8b25e3a37f62",
        "schedules": [
          {
            "scheduleId": "3",
            "day": "1",
            "startTime": "09:00:00",
            "endTime": "11:00:00",
            "classroom": "115",
            "building": "453"
          },
          {
            "scheduleId": "4",
            "day": "3",
            "startTime": "09:00:00",
            "endTime": "11:00:00",
            "classroom": "115",
            "building": "453"
          }
        ]
      }
    ]
  },
  {
    "subjectId": "2",
    "subjectName": "Ingenier├¡a de Software I",
    "subjectCode": "1053486524-C",
    "careerId": "1",
    "curriculum": "curriculum-1",
    "credits": "3",
    "groups": {
      "groupId": "d0b5c4b5-5b1f-4b2b-9b2c-9b2c9b2c9b2d",
      "maxCapacity": "30",
      "teacherId": "fd6644f8-f987-4da4-93c3-8b25e3a37f62",
      "schedules": [
        {
          "scheduleId": "5",
          "day": "2",
          "startTime": "07:00:00",
          "endTime": "09:00:00",
          "classroom": "204",
          "building": "401"
        },
        {
          "scheduleId": "6",
          "day": "4",
          "startTime": "07:00:00",
          "endTime": "09:00:00",
          "classroom": "204",
          "building": "401"
        }
      ]
    }
  },
  {
    "subjectId": "3",
    "subjectName": "Ingenier├¡a de Software II",
    "subjectCode": "1053486524-D",
    "careerId": "2",
    "curriculum": "curriculum-1",
    "credits": "4",
    "groups": {
      "groupId": "d0b5c4b5-5b1f-4b2b-9b2c-9b2c9b2c9b2e",
      "maxCapacity": "30",
      "teacherId": "fd6644f8-f987-4da4-93c3-8b25e3a37f62",
      "schedules": [
        {
          "scheduleId": "7",
          "day": "2",
          "startTime": "14:00:00",
          "endTime": "16:00:00",
          "classroom": "403",
          "building": "454"
        },
        {
          "scheduleId": "8",
          "day": "4",
          "startTime": "14:00:00",
          "endTime": "16:00:00",
          "classroom": "403",
          "building": "454"
        }
      ]
    }
  },
  {
    "subjectId": "4",
    "subjectName": "Arquitectura de Software",
    "subjectCode": "1053486524-E",
    "careerId": "1",
    "curriculum": "curriculum-1",
    "credits": "8",
    "groups": [
      {
        "groupId": "2d3c0e52-a09c-47db-8c42-8028f6e9856c",
        "maxCapacity": "40",
        "teacherId": "fd6644f8-f987-4da4-93c3-8b25e3a37f62",
        "schedules": [
          {
            "scheduleId": "11",
            "day": "2",
            "startTime": "11:00:00",
            "endTime": "13:00:00",
            "classroom": "204",
            "building": "401"
          },
          {
            "scheduleId": "12",
            "day": "4",
            "startTime": "11:00:00",
            "endTime": "13:00:00",
            "classroom": "204",
            "building": "401"
          }
        ]
      },
      {
        "groupId": "a1933e14-95c6-4add-9a74-2cc0b83d554d",
        "maxCapacity": "40",
        "teacherId": "fd6644f8-f987-4da4-93c3-8b25e3a37f62",
        "schedules": [
          {
            "scheduleId": "9",
            "day": "2",
            "startTime": "09:00:00",
            "endTime": "11:00:00",
            "classroom": "204",
            "building": "401"
          },
          {
            "scheduleId": "10",
            "day": "4",
            "startTime": "09:00:00",
            "endTime": "11:00:00",
            "classroom": "204",
            "building": "401"
          }
        ]
      }
    ]
  }
]
```
