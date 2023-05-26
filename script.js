function getPow(num, degree){
  if (degree === 0) {
    return 1;
  }
  if (degree === 1) {
    return num;
  }
  return num * getPow(num, degree - 1);
}

