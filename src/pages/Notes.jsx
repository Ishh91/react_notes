import React from 'react'
import { CiSearch } from 'react-icons/ci';
import dummynotes from '../dummy_notes'
import { Link } from 'react-router-dom';
import { BsPlusLg } from 'react-icons/bs'
import NodeItem from '../component/NodeItem';
const Notes = () => {
  return (
    <section>
      <header className='notes__header'>
        <h2>
          My Notes
        </h2>
        {/* <input type='text' autoFocus placeholder="keyword...."/> */}
        <button className='btn'>
          <CiSearch />
        </button>
      </header>
      <div className='notes__container'>
        {
          dummynotes.map(note => <NodeItem 
           key={note.id} note={note} />)
        }
      </div>
      <Link className='btn add__btn'>
        <BsPlusLg />
      </Link>
    </section>
  )
}

export default Notes