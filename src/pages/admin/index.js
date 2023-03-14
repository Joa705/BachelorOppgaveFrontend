import React from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';


export default function Admin() {
    return ( 

        <MDBTable align='middle'> 
          <MDBTableHead>
            <tr>
              <th scope='col'>Bruker</th>
              <th scope='col'>Tittel</th>
              <th scope='col'>Status</th>
              <th scope='col'>Kategori</th>
              <th scope='col'>Karakter</th>
              <th scope='col'>Administer innlegg</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            <tr>
              <td>
                <div className='d-flex align-items-center'>
                  <img
                    src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                    alt=''
                    style={{ width: '45px', height: '45px' }}
                    className='rounded-circle'
                  />
                  <div className='ms-3'>
                    <p className='fw-bold mb-1'>Adrian Adamski</p>
                    <p className='text-muted mb-0'>adrian@gmail.com</p>
                  </div>
                </div>
              </td>
              <td>
                <p className='fw-normal mb-1'>Ikke helt fornøyd med bygget</p>
              </td>
              <td>
                <MDBBadge color='success' pill>
                  Besvart
                </MDBBadge>
              </td>
              <td>
              <MDBBadge color='warning' pill>
                  Forbedring
                </MDBBadge>
                </td>
                <td>
                <p className='fw-normal'>5 / 10</p>
              </td>
                <td>
                <MDBBtn color='link' rounded size='sm'>
                  Åpne
                </MDBBtn>
                <MDBBtn color='link' rounded size='sm'>
                  Svar
                </MDBBtn>
                <MDBBtn color='link' rounded size='sm'>
                  Set status
                </MDBBtn>
                <MDBBtn color='link' rounded size='sm'>
                  Slett
                </MDBBtn>
              </td>
            </tr>
            <tr>
              <td>
                <div className='d-flex align-items-center'>
                  <img
                    src='https://mdbootstrap.com/img/new/avatars/6.jpg'
                    alt=''
                    style={{ width: '45px', height: '45px' }}
                    className='rounded-circle'
                  />
                  <div className='ms-3'>
                    <p className='fw-bold mb-1'>Joachim Albertsen</p>
                    <p className='text-muted mb-0'>joachim@gmail.com</p>
                  </div>
                </div>
              </td>
              <td>
                <p className='fw-normal mb-1'>Dere er dritt firma</p>
              </td>
              <td>
                <MDBBadge color='danger' pill>
                  Ikke godkjent
                </MDBBadge>
              </td>
              <td>
              <MDBBadge color='danger' pill>
                  Ris
                </MDBBadge>
                </td>
                <td>
                <p className='fw-normal'>1 / 10</p>
              </td>
               <td>
                <MDBBtn color='link' rounded size='sm'>
                  Åpne
                </MDBBtn>
                <MDBBtn color='link' rounded size='sm'>
                  Svar
                </MDBBtn>
                <MDBBtn color='link' rounded size='sm'>
                  Set status
                </MDBBtn>
                <MDBBtn color='link' rounded size='sm'>
                  Slett
                </MDBBtn>
              </td>
            </tr>
            <tr>
              <td>
                <div className='d-flex align-items-center'>
                  <img
                    src='https://mdbootstrap.com/img/new/avatars/7.jpg'
                    alt=''
                    style={{ width: '45px', height: '45px' }}
                    className='rounded-circle'
                  />
                  <div className='ms-3'>
                    <p className='fw-bold mb-1'>Ole Bakken</p>
                    <p className='text-muted mb-0'>ole@gmail.com</p>
                  </div>
                </div>
              </td>
              <td>
                <p className='fw-normal mb-1'>Elsker arkitekturet av bygget deres</p>
              </td>
              <td>
                <MDBBadge color='warning' pill>
                  Venter 
                </MDBBadge>
              </td>
              <td>
              <MDBBadge color='success' pill>
                  Ros
                </MDBBadge>
                </td>
                <td>
                <p className='fw-normal'>9 / 10</p>
              </td>
              <td>
                <MDBBtn color='link' rounded size='sm'>
                  Åpne
                </MDBBtn>
                <MDBBtn color='link' rounded size='sm'>
                  Svar
                </MDBBtn>
                <MDBBtn color='link' rounded size='sm'>
                  Set status
                </MDBBtn>
                <MDBBtn color='link' rounded size='sm'>
                  Slett
                </MDBBtn>
              </td>
            </tr>
            <tr>
              <td>
                <div className='d-flex align-items-center'>
                  <img
                    src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                    alt=''
                    style={{ width: '45px', height: '45px' }}
                    className='rounded-circle'
                  />
                  <div className='ms-3'>
                    <p className='fw-bold mb-1'>Ameer Alkarmo</p>
                    <p className='text-muted mb-0'>ameer@gmail.com</p>
                  </div>
                </div>
              </td>
              <td>
                <p className='fw-normal mb-1'>Dere må skjerpe dere</p>
              </td>
              <td>
                <MDBBadge color='success' pill>
                  Besvart
                </MDBBadge>
              </td>
              <td>
              <MDBBadge color='danger' pill>
                  Ris
                </MDBBadge>
                </td>
                <td>
                <p className='fw-normal'>3 / 10</p>
              </td>
                <td>
                <MDBBtn color='link' rounded size='sm'>
                  Åpne
                </MDBBtn>
                <MDBBtn color='link' rounded size='sm'>
                  Svar
                </MDBBtn>
                <MDBBtn color='link' rounded size='sm'>
                  Set status
                </MDBBtn>
                <MDBBtn color='link' rounded size='sm'>
                  Slett
                </MDBBtn>
              </td>
            </tr>
          </MDBTableBody>
        </MDBTable>
      );
    }