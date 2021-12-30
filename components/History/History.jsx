import React, { useState } from "react"

const History = ({ history }) => {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false)

  const handleClick = () => {
    setIsHistoryOpen(!isHistoryOpen)
  }

  return (
    <>
      {
      history.length > 0 && (
        <>
          <span className="open-history" onClick={() => { handleClick() }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path fill="none" d="M0 0H24V24H0z"/><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            {
              !isHistoryOpen && (<span className="tooltip tooltip-history"> Clique para visualizar o histórico </span>)
            }
          </span>
          {
            isHistoryOpen && (
              <div className="history-container">
                <div className="history-title">
                  <span className="history-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0H24V24H0z"/><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z"/></svg>
                  </span>
                  <h3>Histórico</h3>
                </div>
                <div className="history-content">
                  <ul>
                    {
                      history.map(({ selectedStance, selectedDirection, selectedSpin, selectedTrick, tries, currentStatus }, index) => {
                        return (
                          <li key={index}>
                            #{index + 1} -
                            Base:
                            <span>{selectedStance}</span>
                            Direção:
                            <span>{selectedDirection}</span>
                            Giro:
                            <span>{selectedSpin}</span>
                            Manobra:
                            <span>{selectedTrick}</span>
                            Tentativas:
                            <span>{tries}</span>
                            {
                              currentStatus == '' ? (<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 24 24" stroke="#555">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>) : currentStatus == 'y' ? (<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 24 24" stroke="#047500">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 24 24" stroke="#d00000">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>)
                            }
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>
            )
          }
        </>
      )
    }
    </>
  )
}

export default History