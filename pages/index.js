import Title from "../components/Title/Title"
import Dice from "../components/Dice/Dice"
import Footer from "../components/Footer/Footer"

const Home = () => {
  return (
    <main id="app">
      <Title> 
        <svg width="12" height="37" viewBox="0 0 12 37" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="10.1" height="36" rx="5.05" stroke="white"/>
          <circle cx="3.78044" cy="27.5891" r="0.5" stroke="white" stroke-width="0.126087"/>
          <path d="M3.78043 27.3478L3.8346 27.5146H4.00992L3.86809 27.6176L3.92226 27.7843L3.78043 27.6813L3.63859 27.7843L3.69277 27.6176L3.55093 27.5146H3.72625L3.78043 27.3478Z" fill="white"/>
          <circle cx="7.31956" cy="27.5891" r="0.5" stroke="white" stroke-width="0.126087"/>
          <path d="M7.31957 27.3478L7.37374 27.5146H7.54906L7.40723 27.6176L7.4614 27.7843L7.31957 27.6813L7.17773 27.7843L7.23191 27.6176L7.09007 27.5146H7.26539L7.31957 27.3478Z" fill="white"/>
          <circle cx="7.31956" cy="30.9674" r="0.5" stroke="white" stroke-width="0.126087"/>
          <path d="M7.31957 30.7261L7.37374 30.8928H7.54906L7.40723 30.9959L7.4614 31.1626L7.31957 31.0596L7.17773 31.1626L7.23191 30.9959L7.09007 30.8928H7.26539L7.31957 30.7261Z" fill="white"/>
          <circle cx="3.78044" cy="30.9674" r="0.5" stroke="white" stroke-width="0.126087"/>
          <path d="M3.78043 30.7261L3.8346 30.8928H4.00992L3.86809 30.9959L3.92226 31.1626L3.78043 31.0596L3.63859 31.1626L3.69277 30.9959L3.55093 30.8928H3.72625L3.78043 30.7261Z" fill="white"/>
          <circle cx="3.78044" cy="8.12391" r="0.5" stroke="white" stroke-width="0.126087"/>
          <path d="M3.78043 7.88261L3.8346 8.04935H4.00992L3.86809 8.1524L3.92226 8.31914L3.78043 8.21609L3.63859 8.31914L3.69277 8.1524L3.55093 8.04935H3.72625L3.78043 7.88261Z" fill="white"/>
          <circle cx="7.31956" cy="8.12391" r="0.5" stroke="white" stroke-width="0.126087"/>
          <path d="M7.31957 7.88261L7.37374 8.04935H7.54906L7.40723 8.1524L7.4614 8.31914L7.31957 8.21609L7.17773 8.31914L7.23191 8.1524L7.09007 8.04935H7.26539L7.31957 7.88261Z" fill="white"/>
          <circle cx="7.31956" cy="11.5022" r="0.5" stroke="white" stroke-width="0.126087"/>
          <path d="M7.31957 11.2609L7.37374 11.4276H7.54906L7.40723 11.5307L7.4614 11.6974L7.31957 11.5943L7.17773 11.6974L7.23191 11.5307L7.09007 11.4276H7.26539L7.31957 11.2609Z" fill="white"/>
          <circle cx="3.78044" cy="11.5022" r="0.5" stroke="white" stroke-width="0.126087"/>
          <path d="M3.78043 11.2609L3.8346 11.4276H4.00992L3.86809 11.5307L3.92226 11.6974L3.78043 11.5943L3.63859 11.6974L3.69277 11.5307L3.55093 11.4276H3.72625L3.78043 11.2609Z" fill="white"/>
        </svg>
        Skate Dice 
      </Title>
      <Dice />
      <Footer />
    </main>
  )
}

export default Home
