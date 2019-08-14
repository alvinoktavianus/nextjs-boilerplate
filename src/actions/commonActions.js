const COMMON_ACTIONS = 'COMMON_ACTIONS';
export const COMMON_ACTIONS_LOADING_PAGE_SET = `${COMMON_ACTIONS}_LOADING_PAGE_SET`;

export function setLoadingPage(status) {
  return {
    type: COMMON_ACTIONS_LOADING_PAGE_SET,
    payload: { status },
  };
}
