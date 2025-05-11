import React, { useEffect, useState } from 'react';
import { BiShieldQuarter, BiCheckShield, BiLockOpenAlt } from 'react-icons/bi';
import { FiUser, FiKey } from 'react-icons/fi';
import { MdOutlineVerifiedUser } from 'react-icons/md';
import { HiOutlineLockClosed } from 'react-icons/hi';

const Authenticating = () => {
  const [stage, setStage] = useState(0);
  const [dots, setDots] = useState('');

  useEffect(() => {
    const stageTimer = setInterval(() => {
      setStage(prevStage => {
        if (prevStage >= 3) {
          clearInterval(stageTimer);
          return prevStage;
        }
        return prevStage + 1;
      });
    }, 1200);

    const dotsTimer = setInterval(() => {
      setDots(prev => {
        if (prev.length >= 3) return '';
        return prev + '.';
      });
    }, 400);

    return () => {
      clearInterval(stageTimer);
      clearInterval(dotsTimer);
    };
  }, []);

  const stages = [
    {
      icon: FiUser,
      title: 'Verifying Credentials',
      description: 'Checking your login information'
    },
    {
      icon: HiOutlineLockClosed,
      title: 'Establishing Secure Connection',
      description: 'Creating an encrypted channel'
    },
    {
      icon: BiShieldQuarter,
      title: 'Fetching User Profile',
      description: 'Loading your personalized settings'
    },
    {
      icon: MdOutlineVerifiedUser,
      title: 'Authentication Complete',
      description: 'Redirecting you to your dashboard'
    }
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md px-8 py-12">
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <BiLockOpenAlt size={50} className="text-black" />
            <div className="absolute -top-1 -right-1">
              <div className="bg-black text-white rounded-full p-1">
                <FiKey size={14} />
              </div>
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-black mb-8">
          Authenticating You
        </h1>

        {/* Progress bar */}
        <div className="h-1 w-full bg-gray-100 rounded-full mb-12">
          <div
            className="h-1 bg-black rounded-full transition-all duration-500 ease-out"
            style={{ width: `${((stage + 1) / stages.length) * 100}%` }}
          ></div>
        </div>

        {/* Stages */}
        <div className="space-y-6">
          {stages.map((item, index) => {
            const Icon = item.icon;
            const isCurrent = index === stage;
            const isComplete = index < stage;
            const isPending = index > stage;

            return (
              <div
                key={index}
                className={`flex items-center p-4 rounded-lg transition-all duration-300
                  ${isCurrent ? 'bg-gray-50 shadow-sm' : ''}
                  ${isComplete ? 'opacity-70' : ''}
                  ${isPending ? 'opacity-40' : ''}
                `}
              >
                <div
                  className={`mr-4 p-3 rounded-full 
                    ${isComplete ? 'bg-black text-white' : 'bg-gray-100 text-black'}
                  `}
                >
                  {isComplete ? <BiCheckShield size={24} /> : <Icon size={24} />}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-black">
                    {item.title}
                    {isCurrent && <span className="text-gray-500">{dots}</span>}
                  </h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="text-center text-sm text-gray-500 mt-12">
          This secure process ensures your information remains protected.
        </p>
      </div>
    </div>
  );
};

export default Authenticating;