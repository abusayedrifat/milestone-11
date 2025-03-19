import PropTypes from 'prop-types'

const BookingRow = ({ booking,handleDelete ,handleConfirmBooking}) => {
    const {img , data,price,title,_id,status} = booking
  return (
    
         <tr>
             <th>
            <button onClick={()=>handleDelete(_id)} className='btn bg-gray-900 text-white'>X</button>
          </th>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                  <img
                    src={img}
                  />
                </div>
              </div>
              <div>
                <div className="font-bold">
                    {data.name}
                </div>
              </div>
            </div>
          </td>
          <td>
            {title}
          </td>
          <td>
            {price}
          </td>
          <td>{data.date}</td>
          <th className='flex gap-3'>
            {
              status ? <span className='badge badge-success'>Confirmed</span> :  <button onClick={()=>handleConfirmBooking(_id)} className="btn button1">confirm</button>
            }
           
          </th>
      
         </tr>
    
  );
};

export default BookingRow;

BookingRow.propTypes = {
    booking: PropTypes.node,
    handleDelete: PropTypes.node,
    handleConfirmBooking: PropTypes.node
}