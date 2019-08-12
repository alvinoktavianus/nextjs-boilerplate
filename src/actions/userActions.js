const USER_PAGE = 'USER_PAGE';
export const USER_PAGE_INITIAL_PAGE_REQUESTED = `${USER_PAGE}_INITIAL_PAGE_REQUESTED`;
export const USER_PAGE_USER_BY_ID_SET = `${USER_PAGE}_USER_BY_ID_SET`;

export function requestInitialPage(userId) {
  return {
    type: USER_PAGE_INITIAL_PAGE_REQUESTED,
    payload: { userId },
  };
}

export function setUserById(user) {
  return {
    type: USER_PAGE_USER_BY_ID_SET,
    payload: { user },
  };
}
