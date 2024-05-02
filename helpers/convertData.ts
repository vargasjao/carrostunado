const convertData = (oldData: any) => {
  const newData: Array<any> = [];

  const brands = new Set(oldData.map((od: any) => od.brand));

  brands.forEach((b: any) => {
    newData.push({
      title: b,
      data: oldData.filter((od: any) => od.brand == b),
    });
  });

  return newData;
};

export default convertData;
