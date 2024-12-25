import React from 'react';

const MoodHistory = ({ history }) => {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-4">Mood History</h3>
      <ul className="list-disc pl-5">
        {history.length > 0 ? (
          history.map((entry, index) => (
            <li key={index} className="mb-2">
              Mood: <strong>{entry.mood}</strong>, Time: <em>{entry.time}</em>
            </li>
          ))
        ) : (
          <p className="text-white-500">No mood history yet!</p>
        )}
      </ul>
    </div>
  );
};

export default MoodHistory;
