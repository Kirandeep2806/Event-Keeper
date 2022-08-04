import './App.css';

function App() {
  return (
    <div>
      <div className='flex justify-end bg-indigo-600 text-white text-lg'>
        <ul className='flex my-3 select-none'>
          <li className='mr-6 cursor-pointer'>About</li>
          <li className='mr-6 cursor-pointer'>Projects</li>
          <li className='mr-6 cursor-pointer'>Accomplishments</li>
          <li className='mr-6 cursor-pointer'>Contact Me</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
