import React, { useContext, useEffect, useState } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContex'
import { assets } from "../../assets/assets";

const DoctorDashboard = () => {
  const {
    dashData,
    getDashData,
    dToken,
    cancelAppointment,
    completeAppointment
  } = useContext(DoctorContext)
  const { currency, slotDateFormat, formatTimeWithAMPM } = useContext(AppContext)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      if (dToken) {
        try {
          setIsLoading(true)
          await getDashData()
        } catch (error) {
          console.error('Error loading dashboard data:', error)
        } finally {
          setIsLoading(false)
        }
      }
    }

    fetchData()
  }, [dToken, getDashData])

  if (isLoading) {
    return <div className="flex justify-center items-center h-64">Loading dashboard data...</div>
  }

  if (!dashData) {
    return <div className="text-center py-10">No data available</div>
  }

  console.log('Dashboard Data:', dashData);

  return (
    <div className='m-5'>
      <div className='flex flex-wrap gap-3'>

        <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>
          <img className='w-14' src={assets.earning_icon} alt="" />
          <div>
            <p className='text-xl font-semibold text-gray-600'>{currency}{dashData.earnings}</p>
            <p className='text-gray-400'>Earnings</p>
          </div>
        </div>

        <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>
          <img className='w-14' src={assets.appointments_icon} alt="" />
          <div>
            <p className='text-xl font-semibold text-gray-600'>{dashData.appointments}</p>
            <p className='text-gray-400'>Appointments</p>
          </div>
        </div>

        <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>
          <img className='w-14' src={assets.patients_icon} alt="" />
          <div>
            <p className='text-xl font-semibold text-gray-600'>{dashData.patients}</p>
            <p className='text-gray-400'>Patients</p>
          </div>
        </div>

      </div>
      <div className='bg-white'>
        <div className='flex items-center gap-2.5 px-4 py-4 mt-10 rounded-t border'>
          <img src={assets.list_icon} alt="" />
          <p className='font-semibold'>Latest Bookings</p>
        </div>

        <div className='pt-4 border border-t-0'>
          {
            dashData.latestAppointments.map((item, index) => {
              return (
                <div className='flex items-center px-6 py-3 gap-3 hover:bg-gray-100' key={index}>
                  <img className='rounded-full w-10' src={item.userData.image} alt="" />
                  <div className='flex-1 text-sm'>
                    <p className='text-gray-800 font-medium'>{item.userData.name}</p>
                    <p className='text-gray-600'>
                      {slotDateFormat(item.slotDate.split('_').join('-'))}, {formatTimeWithAMPM(item.slotTime)}
                    </p>
                  </div>
                  {
                    item.cancelled
                      ? <p className="text-red-400 text-xs font-medium">Cancelled</p>
                      : item.isCompleted
                        ? <p className="text-green-400 text-xs font-medium">Completed</p>
                        : <div className="flex">
                          <img onClick={() => cancelAppointment(item._id)} className="w-10 cursor-pointer" src={assets.cancel_icon} alt="" />
                          <img onClick={() => completeAppointment(item._id)} className="w-10 cursor-pointer" src={assets.tick_icon} alt="" />
                        </div>
                  }
                </div>
              )
            })
          }
        </div>
      </div>

    </div>
  )
}

export default DoctorDashboard