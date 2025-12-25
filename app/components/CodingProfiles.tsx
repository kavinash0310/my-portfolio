'use client';

import { ExternalLink, Trophy, Target, Zap, Code } from 'lucide-react';
import { codingProfiles } from '@/app/data/codingProfiles';

interface CodingProfilesProps {
  isDark: boolean;
  cardBg: string;
  borderClass: string;
}

export default function CodingProfiles({ isDark, cardBg, borderClass }: CodingProfilesProps) {
  return (
    <section id="coding" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Coding Profiles
          </span>
        </h2>
        <p className={`text-center ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-12`}>
          My competitive programming journey across platforms
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {codingProfiles.map((profile, index) => (
            <a
              key={index}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${cardBg} p-8 rounded-2xl border ${borderClass} hover:scale-105 transition-all duration-300 group shadow-xl`}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-4xl group-hover:scale-110 transition-transform">{profile.icon}</span>
                    <div>
                      <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">{profile.platform}</h3>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>@{profile.username}</p>
                    </div>
                  </div>
                </div>
                <ExternalLink className={`${isDark ? 'text-gray-400' : 'text-gray-600'} group-hover:text-blue-400 transition-colors`} size={20} />
              </div>

              {profile.platform === "LeetCode" && (
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Total Solved</span>
                    <span className="text-2xl font-bold text-blue-400">{profile.solved}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className={`${isDark ? 'bg-green-500/10' : 'bg-green-100'} p-3 rounded-lg border ${isDark ? 'border-green-500/20' : 'border-green-200'}`}>
                      <div className={`text-xs ${isDark ? 'text-green-400' : 'text-green-600'}`}>Easy</div>
                      <div className="text-xl font-bold text-green-500">{profile.easy}</div>
                    </div>
                    <div className={`${isDark ? 'bg-yellow-500/10' : 'bg-yellow-100'} p-3 rounded-lg border ${isDark ? 'border-yellow-500/20' : 'border-yellow-200'}`}>
                      <div className={`text-xs ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`}>Medium</div>
                      <div className="text-xl font-bold text-yellow-500">{profile.medium}</div>
                    </div>
                    <div className={`${isDark ? 'bg-red-500/10' : 'bg-red-100'} p-3 rounded-lg border ${isDark ? 'border-red-500/20' : 'border-red-200'}`}>
                      <div className={`text-xs ${isDark ? 'text-red-400' : 'text-red-600'}`}>Hard</div>
                      <div className="text-xl font-bold text-red-500">{profile.hard}</div>
                    </div>
                  </div>
                </div>
              )}

              {profile.platform === "Codeforces" && (
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Current Rating</span>
                    <span className="text-2xl font-bold text-blue-400">{profile.rating}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Max Rating</span>
                    <span className="text-xl font-semibold text-purple-400">{profile.maxRating}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Problems Solved</span>
                    <span className="text-xl font-semibold text-green-400">{profile.solved}</span>
                  </div>
                </div>
              )}

              {profile.platform === "CodeChef" && (
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Rating</span>
                    <span className="text-2xl font-bold text-yellow-400">{profile.rating}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Stars</span>
                    <span className="text-xl font-semibold text-orange-400">{profile.stars}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Problems Solved</span>
                    <span className="text-xl font-semibold text-green-400">{profile.solved}</span>
                  </div>
                </div>
              )}

              {/* {profile.platform === "GitHub" && (
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Repositories</span>
                    <span className="text-2xl font-bold text-purple-400">{profile.repos}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Total Stars</span>
                    <span className="text-xl font-semibold text-yellow-400">{profile.stars}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Contributions</span>
                    <span className="text-xl font-semibold text-green-400">{profile.contributions}</span>
                  </div>
                </div>
              )} */}
              {profile.platform === "GFG" && (
  <div className="space-y-3">
    <div className="flex justify-between">
      <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
        Problems Solved
      </span>
      <span className="text-2xl font-bold text-green-400">
        {profile.problemsSolved}
      </span>
    </div>

    <div className="flex justify-between">
      <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
        GFG Score
      </span>
      <span className="text-xl font-semibold text-purple-400">
        {profile.score}
      </span>
    </div>
  </div>
)}


{profile.platform === "HackerRank" && (
  <div className="space-y-3">
    <div className="flex justify-between">
      <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
        Problems Solved
      </span>
      <span className="text-2xl font-bold text-emerald-400">
        {profile.problemsSolved}
      </span>
    </div>

    <div className="flex justify-between">
      <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
        Badges
      </span>
      <span className="text-xl font-semibold text-yellow-400">
        {profile.badges}
      </span>
    </div>

    <div className="flex justify-between">
      <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
        Stars
      </span>
      <span className="text-xl font-semibold text-green-400">
        {profile.stars}⭐
      </span>
    </div>
  </div>
)}

{profile.platform === "CodingNinjas" && (
  <div className="space-y-3">
    <div className="flex justify-between">
      <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
        Problems Solved
      </span>
      <span className="text-2xl font-bold text-orange-400">
        {profile.problemsSolved}
      </span>
    </div>

    <div className="flex justify-between">
      <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
        Level
      </span>
      <span className="text-xl font-semibold text-blue-400">
        {profile.level}
      </span>
    </div>

    <div className="flex justify-between">
      <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
        Rank
      </span>
      <span className="text-xl font-semibold text-purple-400">
        {profile.rank}
      </span>
    </div>
  </div>
)}
            </a>
          ))}
        </div>

        {/* Total Stats Summary */}
        <div className={`mt-12 ${cardBg} p-8 rounded-2xl border ${borderClass} shadow-xl`}>
          <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Overall Coding Stats
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Trophy className="mx-auto mb-2 text-yellow-400" size={32} />
              <div className="text-3xl font-bold text-yellow-400">750</div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Total Problems</div>
            </div>
            <div className="text-center">
              <Target className="mx-auto mb-2 text-green-400" size={32} />
              <div className="text-3xl font-bold text-green-400">1,737</div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Highest Rating</div>
            </div>
            <div className="text-center">
              <Zap className="mx-auto mb-2 text-blue-400" size={32} />
              <div className="text-3xl font-bold text-blue-400">297</div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>LeetCode Solved</div>
            </div>
            <div className="text-center">
              <Code className="mx-auto mb-2 text-purple-400" size={32} />
              <div className="text-3xl font-bold text-purple-400">83</div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>GitHub Contributions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
