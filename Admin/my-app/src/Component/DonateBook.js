import React, { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import SaveIcon from '@mui/icons-material/Save'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import axios from 'axios'
import '../App.css'
function DonateBook () {
  const [add, setAdd] = useState(false)
  const [name, setName] = useState('')
  const [phone_number, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publication, setPublication] = useState('')
  const [genre, setGenre] = useState('')
  const [isbn, setIsbn] = useState('')
  const [data, setData] = useState([])
  const [editId , setEditId] = useState('')
  const [edit , setEdit] = useState(false)
  const handleAdd = () => {
    setAuthor('')
    setTitle('')
    setIsbn('')
    setGenre('')
    setPublication('')
    setAdd(true)
    setEdit(false)
  }

  const getAllData = async () => {
    const response = await axios.get('/get')
    setData(response.data)
  }
  const handleSave = async () => {
    console.log(name , email , phone_number)
    let user_data = await axios.post('/add', { name, email, phone_number })
    let book_data = await axios.post('/add/donate/book', {
      email,
      title,
      author,
      publication,
      genre,
      isbn
    })
    if (user_data && book_data) {
      alert('Data Sucessfully Saved')
    }

    setName('')
    setPhoneNumber('')
    setEmail('')
    setAuthor('')
    setTitle('')
    setIsbn('')
    setGenre('')
    setPublication('')
    setAdd(false)

    getAllData()
  }

  const handleDelete = async () => {
    setName('')
    setPhoneNumber('')
    setEmail('')
    setAuthor('')
    setTitle('')
    setIsbn('')
    setGenre('')
    setPublication('')
    setAdd(false)
  }

  useEffect(() => {
    getAllData()
  }, [])

  const handleEdit=async(id)=>{

    let response = await axios.get(`/get/${id}`)
    setTitle(response.data.title)
    setAuthor(response.data.author)
    setGenre(response.data.genre)
    setPublication(response.data.publication)
    setIsbn(response.data.isbn)
    setAdd(true)
    setEdit(true)
    setEditId(id)
  }

  const handleDeleteData=async(id)=>{
    let response = await axios.delete(`/delete/${id}`)
    if(response){
      alert("Data Deleted Sucessfully..")
    }

    getAllData()
  }

  const handleUpdate=async()=>{
    let update_data = await axios.put(`/update/data/${editId}`,{
      title,
      author,
      publication,
      genre,
      isbn})
    if(update_data){
      alert("Data Updated Sucessfully..")
    }

    setAdd(false)
    setEdit(false)
    getAllData()
  }
 
  return (
    <>
      <div className=' w-full flex justify-center align-middle'>
        <h1 className=' text-sm md:text-xl font-semibold text-center w-44 shadow-md bg-slate-800 p-1 m-1 radius'>
          DONATE A BOOK
        </h1>
      </div>
      <div className='flex justify-center align-middle'>
        <form>
          <table
            className='md:flex justify-center align-middle text-center gap-10 m-4 bg-slate-700 radius shadow-lg'
            cellPadding={10}
          >
            <tr>
              <td className=' text-xs md:text-sm font-semibold'>
                <label for='name'>Full Name</label>
              </td>
              <td>
                <input
                  type='text'
                  name='name'
                  id='name'
                  className=' text-black text-center radius'
                  placeholder='Jhon Doe'
                  required
                  onChange={e => setName(e.target.value)}
                  value={name}
                />
              </td>
            </tr>
            <tr>
              <td className=' text-xs md:text-sm font-semibold'>
                <label for='phone_number'>Phone Number</label>
              </td>
              <td>
                <input
                  type='text'
                  name='phone_number'
                  className=' text-black text-center radius'
                  placeholder='1234567890'
                  id='phone_number'
                  required
                  onChange={e => setPhoneNumber(e.target.value)}
                  value={phone_number}
                />
              </td>
            </tr>
            <tr>
              <td className=' text-xs md:text-sm font-semibold'>
                <label for='email'>Email</label>
              </td>
              <td>
                <input
                  type='email'
                  name='email'
                  id='email'
                  className=' text-black text-center radius'
                  placeholder='Jhondoe@gmail.com'
                  required
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                />
              </td>
            </tr>
            <tr>
              <td>
                <AddIcon
                  className=' bg-green-600 radius cursor-pointer'
                  onClick={handleAdd}
                />
              </td>
            </tr>
          </table>
          <table
            className=' text-center gap-10 m-4 bg-slate-700 radius shadow-lg'
            cellPadding={10}
          >
            {add && 
              <>
                <tr>
                  <td className=' text-xs md:text-sm font-semibold'>
                    <label for='title'>Book Title</label>
                  </td>
                  <td>
                    <input
                      type='text'
                      name='title'
                      id='title'
                      className=' text-black text-center radius'
                      placeholder='Title'
                      required
                      onChange={e => setTitle(e.target.value)}
                      value={title}
                    />
                  </td>
                </tr>
                <tr>
                  <td className=' text-xs md:text-sm font-semibold'>
                    <label for='author'>Author</label>
                  </td>
                  <td>
                    <input
                      type='text'
                      name='author'
                      id='author'
                      className=' text-black text-center radius'
                      placeholder='Author'
                      required
                      onChange={e => setAuthor(e.target.value)}
                      value={author}
                    />
                  </td>
                </tr>

                <tr>
                  <td className=' text-xs md:text-sm font-semibold'>
                    <label for='publication'>Year of Publication</label>
                  </td>
                  <td>
                    <input
                      type='text'
                      name='publication'
                      id='publication'
                      className=' text-black text-center radius'
                      placeholder='Publication'
                      required
                      onChange={e => setPublication(e.target.value)}
                      value={publication}
                    />
                  </td>
                </tr>
                <tr>
                  <td className=' text-xs md:text-sm font-semibold'>
                    <label for='genre'> Genre</label>
                  </td>
                  <td>
                    <input
                      type='text'
                      name='genre'
                      id='genre'
                      className=' text-black text-center radius'
                      placeholder='Genre'
                      required
                      onChange={e => setGenre(e.target.value)}
                      value={genre}
                    />
                  </td>
                </tr>
                <tr>
                  <td className=' text-xs md:text-sm font-semibold'>
                    <label for='isbn'>ISBN</label>
                  </td>
                  <td>
                    <input
                      type='text'
                      name='isbn'
                      id='isbn'
                      className=' text-black text-center radius'
                      placeholder='ISBN'
                      required
                      onChange={e => setIsbn(e.target.value)}
                      value={isbn}
                    />
                  </td>
                </tr>
                <tr>
                 {
                  edit ? 
                  <td>
                  <button
                    type='button'
                    className=' w-20 bg-green-600 p-1 radius hover:bg-green-500'
                    onClick={handleUpdate}
                  >
                   Update
                  </button>
                </td>:
                 <td>
                 <button
                   type='button'
                   className=' w-20 bg-green-600 p-1 radius hover:bg-green-500'
                   onClick={handleSave}
                 >
                   <SaveIcon />
                 </button>
               </td>
                 }
                  <td>
                    <button
                      type='button'
                      className=' w-20 bg-red-600 p-1 radius hover:bg-red-500'
                      onClick={handleDelete}
                    >
                      <DeleteIcon />
                    </button>
                  </td>
                </tr>
              </>
            }
          </table>
        </form>
      </div>
      <div className=' flex justify-center align-middle'>
        <table
          className='border border-black bg-white text-black mt-4'
          cellPadding={10}
        >
          <tr>
            <th className='border border-black text-xs md:text-sm'>Sr No</th>
            <th className='border border-black text-xs md:text-sm'>
              Book Title
            </th>
            <th className='border border-black text-xs md:text-sm'>Author</th>
            <th className='border border-black text-xs md:text-sm'>Genre</th>
            <th className='border border-black text-xs md:text-sm'>
              Year of Publication
            </th>
            <th className='border border-black text-xs md:text-sm'>ISBN</th>
            <th className='border border-black text-xs md:text-sm'>Action</th>
          </tr>
          {data.length !== 0 &&
            data.map((item,index) => {
              return (
                <>
                  <tr key={index}>
                    <td className='border border-black text-xs md:text-sm'>
                      {index+1}
                    </td>
                    <td className='border border-black text-xs md:text-sm'>
                      {item.title}
                    </td>
                    <td className='border border-black text-xs md:text-sm'>
                      {item.author}
                    </td>
                    <td className='border border-black text-xs md:text-sm'>
                      {item.genre}
                    </td>
                    <td className='border border-black text-xs md:text-sm'>
                      {item.publication}
                    </td>
                    <td className='border border-black text-xs md:text-sm'>
                      {item.isbn}
                    </td>
                    <td>
                      <button
                        type='button'
                        className=' w-10 mr-2 bg-green-600 p-1 radius hover:bg-green-500 text-white'
                        onClick={()=>handleEdit(item._id)}
                      >
                        <EditIcon />
                      </button>
                      <button
                        type='button'
                        className=' w-10 bg-red-600 p-1 radius hover:bg-red-500 text-white'
                        onClick={()=>handleDeleteData(item._id)}
                      >
                        <DeleteIcon />
                      </button>
                    </td>
                  </tr>
                </>
              )
            })}
        </table>
      </div>
    </>
  )
}

export default DonateBook
