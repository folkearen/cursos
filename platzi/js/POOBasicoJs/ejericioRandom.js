/*
Colección de registros
Está creando una función que ayuda en el mantenimiento de una colección de álbumes musicales. La colección está organizada como un objeto que contiene varios álbumes que también son objetos. Cada álbum está representado en la colección con un único idcomo nombre de propiedad. Dentro de cada objeto de álbum, hay varias propiedades que describen información sobre el álbum. No todos los álbumes tienen información completa.

La updateRecordsfunción toma 4 argumentos representados por los siguientes parámetros de función:

records- un objeto que contiene varios álbumes individuales
id- un número que representa un álbum específico en el recordsobjeto
prop- una cadena que representa el nombre de la propiedad del álbum para actualizar
value- una cadena que contiene la información utilizada para actualizar la propiedad del álbum
Complete la función usando las reglas a continuación para modificar el objeto pasado a la función.

Su función siempre debe devolver el recordsobjeto completo.:)
Si value es una cadena vacía, elimine la prop propiedad dada del álbum. :)
Si prop no es tracks y value no es una cadena vacía, asigne el value al de ese álbum prop.:)

Si prop es tracks y value no es una cadena vacía, debe actualizar la tracksmatriz del álbum. :)

Primero, si el álbum no tiene una trackspropiedad, asígnele una matriz vacía. :)
Luego agregue el value como el último elemento en la tracks matriz del álbum.:)
Nota:recordCollection Se utiliza una copia del objeto para las pruebas. No debe modificar directamente el recordCollectionobjeto.

*/
// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    
    if(!value){
        delete records[id].prop;
    }
    if(prop !== 'tracks' && value ){
        records[id].prop = value;
    }
    if(prop == 'tracks' && value ){
        if(!records[id].tracks){
            records[id].tracks = []
        }
        records[id].tracks.push(value);
    }
    return records;
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');