// // types
import { createSlice } from "@reduxjs/toolkit";
// import { GetUserInformation } from "Services/UserAPIs";

// // initial state
const initialState = {
  currentUserInfo: {},
  isLoading: false,
};

const currentEntity = createSlice({
  name: "currentEntity",
  initialState,
  reducers: {
    setAppObjects(state, action) {
      state.isLoading = false;
      state.currentUserInfo = action.payload.userInfo;
    },

    // setActiveEntity(state, action) {
    //   if (action.payload.entityId && state.currentEntities) {
    //     let foundEntity = state.currentEntities.find(
    //       (o) => o.id === action.payload.entityId
    //     );
    //     if (foundEntity) {
    //       state.currentEntityObject = foundEntity;
    //     }
    //   }
    // },

    // setGroupEntity(state, action) {
    //   if (action.payload.group_name === null) {
    //     state.currentEntities = action.payload.data.entities;
    //     state.currentUserInfo = action.payload.data.user_info;
    //     state.currentOrgInfo = action.payload.data.org_info;
    //     state.currentEntityObject = {};
    //   }
    //   if (action.payload.data && action.payload.group_name) {
    //     state.currentEntities = action.payload.data.entities;
    //     const foundGroup = state.currentEntities.find(
    //       (group) => group.name === action.payload.group_name
    //     );
    //     if (foundGroup) {
    //       state.currentEntityObject = foundGroup;
    //     } else {
    //       state.currentEntityObject = {};
    //     }
    //     state.currentUserInfo = action.payload.data.user_info;
    //     state.currentOrgInfo = action.payload.data.org_info;
    //   }
    // },
    // updateEntity(state, action) {
    //   let entity = action.payload.entity;
    //   if (entity.id && state.currentEntities) {
    //     let foundEntity = state.currentEntities.find((o) => o.id === entity.id);
    //     if (foundEntity) {
    //       foundEntity.name = entity.name;
    //       foundEntity.start_date = entity.start_date;
    //       state.currentEntityObject = foundEntity;
    //     }
    //   }
    // },
    // resetCurrentEntity(state, action) {
    //   state.currentEntityObject = {};
    // },
    // setDataUpdateDate(state, action) {
    //   state.currentEntityObject = action.payload.last_data_updated_on;
    // },
    // setCurrentEntityUpdateDataDate(state, action) {
    //   if (state.currentEntityObject && state.currentEntities) {
    //     let newEntity = state.currentEntities.find((o) => {
    //       return o.id === state.currentEntityObject.id;
    //     });
    //     if (newEntity) {
    //       newEntity.last_data_updated_on = action.payload.last_data_updated_on;
    //       newEntity.start_date = action.payload.start_date;
    //       state.currentEntityObject.last_data_updated_on =
    //         action.payload.last_data_updated_on;
    //       state.currentEntityObject.start_date = action.payload.start_date;
    //     }
    //   }
    // },

    // setUserInfo(state, action) {
    //   state.currentUserInfo.first_name = action.payload.first_name;
    //   state.currentUserInfo.last_name = action.payload.last_name;
    //   state.currentOrgInfo = action.payload.org_info;
    // },
    // fetchUserInfo(state, action) {
    //   state.isLoading = true;
    //   GetUserInformation(
    //     action.payload.getAccessTokenSilently,
    //     action.payload.dispatch
    //   );
    // },
    // deleteEntity(state, action) {
    //   if (action.payload.entityId && state.currentEntities) {
    //     let newEntity = state.currentEntities.filter((o) => {
    //       return o.id !== action.payload.entityId;
    //     });
    //     if (newEntity) {
    //       state.currentEntities = newEntity;
    //       state.currentEntityObject = {};
    //     }
    //   }
    // },
    // updateCurrentOrgInfo(state, action) {
    //   if (state.currentOrgInfo) {
    //     // state.currentEntities.org_name = "",
    //     state.currentOrgInfo.onTrialMessage = action.payload.onTrialMessage;
    //     state.currentOrgInfo.activeSubscription = true;
    //   }
    // },
  },
});

export default currentEntity.reducer;

export const {
  setActiveEntity,
  setGroupEntity,
  setAppObjects,
  updateEntity,
  setUserInfo,
  fetchUserInfo,
  resetCurrentEntity,
  deleteEntity,
  setCurrentEntityUpdateDataDate,
  updateCurrentOrgInfo,
} = currentEntity.actions;
