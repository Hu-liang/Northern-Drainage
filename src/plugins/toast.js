function showWarn (field){
  this.$vux.toast.show({
    text: `${field}`,
    type: "warn"
  });
}
function showSuccess (field) {
  this.$vux.toast.show({
    text: `${field}`,
    type: "success"
  });
}
export {
  showWarn,
  showSuccess
}
