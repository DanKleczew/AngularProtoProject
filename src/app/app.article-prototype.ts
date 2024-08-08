export function getInfosString(contentType : string, content: any) : string{
    if (contentType === ''){
      return content.author;
    }
    const tab = contentType.split(' ');
    let infos = '';
    for (let element of tab){
      if (element.charAt(0) === '[') {
        let key = element.replace('[', '').replace(']', '').toLowerCase();
        if (key === 'date'){
          infos += content[key].substring(0, 10) + ' ';
        } else {
          infos += content[key] + ' ';}
      } else {
        infos += element + ' ';
      }
    }
    return infos;
  }