const HOME_PAGE = 'HOME_PAGE';
export const HOME_PAGE_INITIAL_PAGE_REQUESTED = `${HOME_PAGE}_INITIAL_PAGE_REQUESTED`;
export const HOME_PAGE_USERS_LIST_SET = `${HOME_PAGE}_USERS_LIST_SET`;

export function initPageRequest() {
  return {
    type: HOME_PAGE_INITIAL_PAGE_REQUESTED,
  };
}

export function setUsersList(users) {
  return {
    type: HOME_PAGE_USERS_LIST_SET,
    payload: { users },
  };
}
