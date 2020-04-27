function date(done){
  try{
  const now = new Date();
  //console.log(now);
  done(now);
  }catch(err){
    console.log(err);
  }

}

module.exports = date;
