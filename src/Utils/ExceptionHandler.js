export const handleCustomException = (enqueueSnackbar, errorJson) => {
  try {
    for (let i = 0; i < errorJson.messages.length; i++) {
      enqueueSnackbar(errorJson.messages[i], { variant: "error" });
    }
  } catch (err) {}
};

export const handleException = (enqueueSnackbar, err) => {
  try {
    if (err.response.status === 400) {
      enqueueSnackbar(err.response.data.messages[0], {
        variant: "error",
      });
    } else {
      enqueueSnackbar("Something went wrong!", { variant: "error" });
    }
  } catch (err) {}
};
