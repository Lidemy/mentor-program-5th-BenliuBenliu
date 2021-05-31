const request = require('request')

const basicUrl = 'https://lidemy-book-store.herokuapp.com/books/'

const action = process.argv[2]
switch (action) {
  case 'list':
    listBooks()
    break
  case 'read':
    !process.argv[3] ? console.log('請輸入欲找尋的書本 id') : readBook(process.argv[3])
    break
  case 'delete':
    !process.argv[3] ? console.log('請輸入欲刪除的書本 id') : deleteBook(process.argv[3])
    break
  case 'create':
    !process.argv[3] ? console.log('請輸入欲創建的書本名稱') : createBook(process.argv[3])
    break
  case 'update':
    !process.argv[3] || !process.argv[4] ? console.log('請輸入欲更新的書本 id 與欲更新的書本名稱') : updateBook(process.argv[3], process.argv[4])
    break
  default:
    console.log('無法辨識的動作')
}

function listBooks() {
  const options = {
    url: `${basicUrl}?_limit=20`
  }
  request(options, (err, res, body) => {
    if (err) {
      return console.log('error')
    }
    if (res.statusCode >= 400) {
      return console.log('Something goes wrong,statuscode :', res.statusCode)
    }

    let result = ''
    try {
      result = JSON.parse(body)
    } catch (err) {
      return console.log('NOT JSON')
    }
    for (let i = 0; i < result.length; i++) {
      console.log(`${result[i].id}. ${result[i].name}`)
    }
  })
}
function readBook(id) {
  const options = {
    url: basicUrl + id
  }
  request(options, (err, res, body) => {
    if (err) {
      return console.log('error')
    }

    if (res.statusCode === 404) {
      return console.log(`找尋不到 ${id} 的書本資料`)
    }

    if (res.statusCode >= 400) {
      return console.log('Something goes wrong,statuscode :', res.statusCode)
    }

    let result = ''
    try {
      result = JSON.parse(body)
    } catch (err) {
      return console.log('NOT JSON')
    }

    console.log(`${result.id}. ${result.name}`)
  })
}

function createBook(bookname) {
  request.post(
    {
      url: basicUrl,
      form: { name: bookname }
    }, (err, res, body) => {
      if (err) {
        return console.log('error')
      }

      if (res.statusCode >= 400) {
        return console.log('Something goes wrong,statuscode :', res.statusCode)
      }

      if (res.statusCode >= 200 && res.statusCode <= 300) {
        console.log('新增成功')
      }
    })
}

function deleteBook(id) {
  const options = {
    url: basicUrl + id
  }
  request.del(options, (err, res, body) => {
    if (err) {
      return console.log('error')
    }

    if (res.statusCode === 404) {
      return console.log(`找尋不到 ${id} 的書本資料！請確認有此書籍`)
    }

    if (res.statusCode >= 400) {
      return console.log('Something goes wrong,statuscode :', res.statusCode)
    }

    if (res.statusCode >= 200 && res.statusCode < 300) {
      console.log(`成功刪除 ${id} 的書本資料`)
    }
  })
}

function updateBook(id, newName) {
  request.patch(
    {
      url: basicUrl + id,
      form: { name: newName }
    }, (err, res, body) => {
      if (err) {
        return console.log('error')
      }
      if (res.statusCode === 404) {
        return console.log(`找尋不到 ${id} 的書本資料！請確認有此書籍`)
      }

      if (res.statusCode >= 400) {
        return console.log('Something goes wrong,statuscode :', res.statusCode)
      }

      if (res.statusCode >= 200 && res.statusCode < 300) {
        console.log('更新成功')
      }
    })
}
