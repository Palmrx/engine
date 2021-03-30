function palm(eid) {
  const engine =
  {
    log:(logging)=>{
      console.log(logging);
    },
    alert:(alerting)=>{
      alert("Palm Engine" + "\n" + alerting);
    }
  }
}
