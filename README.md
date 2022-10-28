# Flitts Test

## No. 1

Terdapat sebuah table "USER" yg memiliki 3 kolom: ID, UserName, Parent. Di mana:

- Kolom ID adalah Primary Key
- Kolom UserName adalah Nama User
- Kolom Parent adalah ID dari User yang menjadi Creator untuk User tertentu.

eg.
| ID | UserName | Parent |
| :-- | :------: | -----: |
| 1 | Ali | 2 |
| 2 | Budi | 0 |
| 3 | Cecep | 1 |

**Tuliskan SQL Query untuk mendapatkan data berisi:**
|ID|UserName|ParentUserName|
|:-|:---:|--:|
|1|Ali|Budi
|2|Budi| NULL|
|3|Cecep| Ali

\*Kolom ParentUserName adalah UserName berdasarkan value Parent

## No 2

Backend harus memiliki:

- 2 endpoint
  - "/search" method GET
  - "/detail" method GET (single movie detail)
- Database disarankan menggunakan MongoDB
- Akses credential untuk API:
  - Key : "faf7e5bb&s"
  - URL : http://www.omdbapi.com/

Point penting:

- Kode bisa dibaca dengan rapoh
- Membuat unit test untuk poin besar (optional)

Plus points:

- Deploy hasil ke public URL, sehingga kami bisa cek hasil yang sudah dibuat
- Implementasi Clean Architecture is a BIG plus
- Selesaikan unit tests

---

Answer for no. 2 is in this repository:
https://github.com/MrvnLucky/flitts-backend-test

---

## No 3

Merefaktor kode dibawah menjadi lebih efisien dan mudah dibaca dengan logik yang
baik

```
function findFirstStringInBracket (str) {
  if(str.length > 0){
    let indexFirstBracketFound = str.indexOf("(");
    if(indexFirstBracketFound >= 0){
      let wordsAfterFirstBracket = str.substr( indexFirstBracketFound );
    if (wordsAfterFirstBracket) {
      wordsAfterFirstBracket = wordsAfterFirstBracket.substr(1);
      let indexClosingBracketFound = wordsAfterFirstBracket.indexOf(")");
      if(indexClosingBracketFound >= 0){
        return wordsAfterFirstBracket.substring(0, indexClosingBracketFound);
      }
      else{
        return '';
      }
    } else {
        return '';
      }
    } else {
      return '';
    }
  } else {
    return '';
  }
}
```

## No 4

Anagram adalah istilah dimana suatu string jika dibolak balik ordernya maka akan sama eg.
'aku' dan 'kua' adalah Anagram, 'aku' dan 'aka' bukan Anagram.

**Dibawah ini ada array berisi sederetan Strings.**

`['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']`

Silahkan kelompokkan/group kata-kata di dalamnya sesuai dengan kelompok Anagramnya,

Catatan: tidak boleh menggunakan syntax es6 map, reduce, find, filter

**Expected Outputs**

```
[
  ["kita", "atik", "tika"],
  ["aku", "kua"],
  ["makan"],
  ["kia"]
]
```
