function validateEditor(data,field){
  if(data.time.length !== 0)
    return data.time[0][field];
  if (data.emergencyTime.length !== 0)
      return data.emergencyTime[0][field];
}

export function accessor(data, field, editor) {
    var value = null

    if (typeof field === 'function') value = field(data)
    else if (
        typeof field === 'string' &&
        typeof data === 'object' &&
        data != null
    ) {

        value =
            editor ?
                validateEditor(data,field)
                :
                data[field];

        return value
    }
}
