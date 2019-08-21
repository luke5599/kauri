/** @format */

import metadataReducer from "../../../src/renderer/redux/reducers/metadata";
import * as types from "../../../src/renderer/redux/actionTypes";

describe("metadata reducer", () => {
  it("should handle SET_METADATA", () => {
    expect(
      metadataReducer(
        {
          title: "Let's Rethink Document Processing",
          authors: [
            "Sean Bailey",
            "Adam Crocker",
            "Prajna Sariputra",
            "Luke Ingram",
            "David Abraham",
          ],
          createdAt: "2019-08-01T12:59:15+11:00",
          updatedAt: "2019-08-01T12:59:15+11:00",
          editDuration: "P3Y6M4DT12H30M5S",
        },
        {
          type: types.SET_METADATA,
          key: "title",
          data: "Updated title",
        },
      ),
    ).toEqual({
      title: "Updated title",
      authors: [
        "Sean Bailey",
        "Adam Crocker",
        "Prajna Sariputra",
        "Luke Ingram",
        "David Abraham",
      ],
      createdAt: "2019-08-01T12:59:15+11:00",
      updatedAt: "2019-08-01T12:59:15+11:00",
      editDuration: "P3Y6M4DT12H30M5S",
    });
  });

  it("should handle addding an author", () => {
    expect(
      metadataReducer(
        {
          title: "Let's Rethink Document Processing",
          authors: [
            "Sean Bailey",
            "Adam Crocker",
            "Prajna Sariputra",
            "Luke Ingram",
            "David Abraham",
          ],
          createdAt: "2019-08-01T12:59:15+11:00",
          updatedAt: "2019-08-01T12:59:15+11:00",
          editDuration: "P3Y6M4DT12H30M5S",
        },
        {
          type: types.SET_METADATA,
          key: "authors",
          data: "Testing Man",
        },
      ),
    ).toEqual({
      title: "Let's Rethink Document Processing",
      authors: [
        "Sean Bailey",
        "Adam Crocker",
        "Prajna Sariputra",
        "Luke Ingram",
        "David Abraham",
        "Testing Man",
      ],
      createdAt: "2019-08-01T12:59:15+11:00",
      updatedAt: "2019-08-01T12:59:15+11:00",
      editDuration: "P3Y6M4DT12H30M5S",
    });
  });

  it("should add new metadata", () => {
    expect(
      metadataReducer(
        {
          title: "Let's Rethink Document Processing",
          authors: [
            "Sean Bailey",
            "Adam Crocker",
            "Prajna Sariputra",
            "Luke Ingram",
            "David Abraham",
          ],
          createdAt: "2019-08-01T12:59:15+11:00",
          updatedAt: "2019-08-01T12:59:15+11:00",
          editDuration: "P3Y6M4DT12H30M5S",
        },
        {
          type: types.SET_METADATA,
          key: "layout",
          data: "design",
        },
      ),
    ).toEqual({
      title: "Let's Rethink Document Processing",
      authors: [
        "Sean Bailey",
        "Adam Crocker",
        "Prajna Sariputra",
        "Luke Ingram",
        "David Abraham",
      ],
      createdAt: "2019-08-01T12:59:15+11:00",
      updatedAt: "2019-08-01T12:59:15+11:00",
      editDuration: "P3Y6M4DT12H30M5S",
      layout: "design",
    });
  });
});
