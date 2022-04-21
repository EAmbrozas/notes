import React from 'react'
import './modal.css'
import {MdClose} from 'react-icons/md'


export const Modal = ({showModal, setShowModal}) => {
    return (
        <>
        {showModal ? 
        <div className='modal' showModal={setShowModal}>
            <div className="modal_content">
                <MdClose onClick={() => setShowModal(prev => !prev)} className='modal_exit'/>
                <h2 className='modal_header'>Games list</h2>
                <div className="games_list">
                    <p>1.PUBG - 2.Fortnight - 3.GTA V - 4.Minecfraft - 5.Overwatch - 6.Red Dead Redemption 2 - 
                        7.Star Wars Jedi:Fallen - 8.ARK:Survival Evolved - 9.Rainbow Six Siege - 10.FIFA 2022 </p>
                </div>

                <h2 className='modal_header'>Gaming Rools</h2>
                <h3 className='rools_header'>Booking</h3>
                <p>All bookings require €50 initial deposit to be paid by cash
                    or bank transfer. This deposit is non-refundable. The
                    remaining balance must be paid 7 days prior to the event.</p>

                <h3 className='rools_header'>Cancelation</h3>
                <p>If you cancel your booking less than 2 weeks prior the
                    event no refund will be given, however you can rebook
                    your party within the next 12month.</p>

                <h3 className='rools_header'>Media</h3>
                <p>During the event we may take some photos and videos. 
                    Any and all photographs, videos, or other recorded media may 
                    be used by Kids Party Station for the purposes of marketing or 
                    advertising without any request being made to the featured parties 
                    and without any payment or compensation being offered. If this is 
                    not acceptable please notify us by phone or e-mail.</p>

                <h3 className='rools_header'>Damages</h3>
                <p>Harsh treatment or vandalism and that is deemed
                    purposeful we reserve the right to charge to the originally
                    contracted person the full amount to repair or replace the
                    equipment. Any damages must be reported to a member
                    of staff immediately.</p>

                <h3 className='rools_header'>Food</h3>
                <p>No food or drinks to be brought in to the van or consumed on board.</p>

                <h2 className='modal_header'>Pricing</h2>

                
            </div>
        </div> : null}
        </>
    )
}