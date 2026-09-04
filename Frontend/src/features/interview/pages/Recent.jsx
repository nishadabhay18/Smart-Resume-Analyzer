import React, { useState } from 'react'
import { useInterview } from '../hooks/useInterview'
import { RiDeleteBin5Fill } from '@remixicon/react'
import { RiArrowLeftLongLine } from '@remixicon/react'
import { useNavigate } from 'react-router'

const Recent = () => {

    const { loading, generateReport, reports, deleteReport } = useInterview()

    const navigate = useNavigate()

    return (

        <div className='recent-page'>
            <div className='flex items-center justify-center flex-col gap-3 p-4'>
                {/* <div className=" back cursor-pointer rounded-sm flex justify-start">
                    <RiArrowLeftLongLine className=' border-slate-300 px-2 rounded-sm h-7 w-9 hover:bg-red-500 ' onClick={() => navigate('/')} />
                </div> */}
                {/* Recent Reports List */}
                {reports.length > 0 && (
                    <section className='recent-reports'>
                        <div className='flex justify-between'>
                            <div className=" back cursor-pointer rounded-sm flex items-start">
                                <RiArrowLeftLongLine className=' border-slate-300 px-2 rounded-sm h-7 w-9 hover:bg-red-500 ' onClick={() => navigate('/')} />
                            </div>
                            <h2 className='font-semibold text-xl'> Recent Interview Plans</h2>
                        </div>
                        <ul className='reports-list w-170 h-40'>
                            {reports.map(report => (

                                <li
                                    key={report._id}
                                    className="report-item relative flex"
                                    onClick={() => navigate(`/interview/${report._id}`)}
                                >
                                    <h3>{report.title || "Untitled Position"}</h3>

                                    <p className="report-meta">
                                        Generated on{" "}
                                        {new Date(report.createdAt).toLocaleDateString()}
                                    </p>

                                    <p
                                        className={`match-score ${report.matchScore >= 80
                                            ? "score--high"
                                            : report.matchScore >= 60
                                                ? "score--mid"
                                                : "score--low"
                                            }`}
                                    >
                                        Match Score: {report.matchScore}%
                                    </p>

                                    {/* Delete button - bottom right */}
                                    <button
                                        className="absolute bottom-3 right-3 text-red-400 transition hover:text-red-500"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            console.log("CLICKED DELETE:", report._id)
                                            deleteReport(report._id)
                                        }}
                                    >
                                        <RiDeleteBin5Fill size={20} />
                                    </button>

                                </li>

                            ))}
                        </ul>
                    </section>
                )}

                {/* No reports */}
                {reports.length === 0 && (
                    <div className="flex min-h-[60vh] items-center justify-center">
                        <p className="text-gray-500">
                            No interview plans yet.
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Recent
