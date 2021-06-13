import React from 'react'

export default function SeatMatrix({Review}) {
    return (
        <div id="seat-matrix">
        <h3 className="mt-4">Seat Matrix </h3>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: Review.seat_matrix }}></div>
        </div>
    )
}
