// Message alternatives storage - comprehensive collection of motivational messages
const MESSAGE_ALTERNATIVES = {
    general: {
        default: [
            ["You're doing amazing! 🌟", "You're incredible! ✨", "You're fantastic! 💫", "You're outstanding! 🎯"],
            ["Keep up the great work! 💪", "You're crushing it! 🔥", "Amazing progress! 🚀", "Outstanding effort! ⚡"],
            ["Every day counts! 🎯", "Each moment matters! ⏰", "Progress adds up! 📈", "Small steps, big results! 🌱"],
            ["You've got this! 🚀", "You're unstoppable! 💥", "Nothing can stop you! 🌪️", "You're a force! ⚡"],
            ["Consistency is key! 🔑", "Steady wins the race! 🏃", "Persistence pays off! 💰", "Keep going strong! 💪"],
            ["Stay strong! 💎", "You're resilient! 🛡️", "Inner strength shines! ✨", "Tough and determined! 🔥"],
            ["You're unstoppable! ⚡", "Nothing holds you back! 🌊", "Unbreakable spirit! 💎", "Limitless potential! 🚀"],
            ["One day at a time! 🌈", "Focus on today! 🎯", "Present moment power! ⚡", "Step by step! 👣"],
            ["You're on fire! 🔥", "Blazing with determination! 🌟", "Ignited passion! 💥", "Burning bright! ✨"],
            ["Believe in yourself! ✨", "Self-confidence soars! 🚀", "Trust your journey! 🌟", "You are capable! 💪"],
            ["Progress over perfection! 🎨", "Growth mindset wins! 🌱", "Learning and improving! 📚", "Every attempt counts! 🎯"],
            ["You're a champion! 🏆", "Victory is yours! 🥇", "Triumphant spirit! 👑", "Winner mentality! 💫"]
        ],
        milestones: {
            0: [
                "Great start! The first step is always the hardest! 🌱",
                "Every journey begins with a single step! 🌟",
                "The adventure starts now! Your story begins! 📖",
                "First moments are the foundation of greatness! 🏗️",
                "You've taken the leap! Courage in action! 💪"
            ],
            1: [
                "You made it one full day! Incredible! 🎉",
                "24 hours of commitment! You're amazing! ⏰",
                "One day down, countless more to go! 🌟",
                "Your first milestone achieved! Celebration time! 🎊",
                "Day one complete! The momentum builds! 🚀"
            ],
            7: [
                "One full week! You're building real habits! 🌟",
                "Seven days of consistency! Habit forming! 📅",
                "A week of dedication! You're committed! 💪",
                "Seven days strong! The pattern emerges! 🔄",
                "One week milestone! Your journey deepens! 🌈"
            ],
            30: [
                "30 days! You're a habit-building machine! 👑",
                "A month of dedication! True commitment! 📆",
                "Thirty days of progress! You're unstoppable! 🚀",
                "One month milestone! Habits become lifestyle! 🌟",
                "30 days strong! Your transformation shows! ✨"
            ],
            100: [
                "100 DAYS! You're absolutely legendary! 💯",
                "A century of commitment! You're a champion! 🏆",
                "100 days of excellence! Legendary status! 👑",
                "Triple digits! Your perseverance inspires! 🌟",
                "100 days milestone! You're a true warrior! ⚔️"
            ]
        }
    },
    streak_badges: {
        just_started: [
            { emoji: '🌱', text: 'Just Started!', class: 'new', messages: [
                "Every journey begins with a single step! 🌟",
                "First steps are the foundation of greatness! 🏗️",
                "The adventure starts now! Your story begins! 📖",
                "You've taken the leap! Courage in action! 💪",
                "New beginnings hold infinite potential! ✨"
            ]},
            { emoji: '🌱', text: 'Just Started!', class: 'new', messages: [
                "The spark of commitment ignites! 🔥",
                "Your path unfolds before you! 🛤️",
                "Every expert was once a beginner! 🌟",
                "The seed of success is planted! 🌱",
                "Your journey of a thousand miles begins! 👣"
            ]}
        ],
        five_minutes: [
            { emoji: '🌿', text: '5+ Minutes!', class: 'new', messages: [
                "Great momentum! Keep that energy flowing! 💫",
                "Five minutes of focus! The flow begins! 🌊",
                "Initial commitment showing results! 📈",
                "First milestone achieved! You're moving! 🚀",
                "Five minutes of dedication! Building steam! 💨"
            ]},
            { emoji: '🌿', text: '5+ Minutes!', class: 'new', messages: [
                "The momentum is building! Your effort shows! 💪",
                "Five minutes down, countless more ahead! ⏰",
                "Early progress creates lasting habits! 🔄",
                "Your dedication is already paying off! 💰",
                "Five minutes of focus = infinite potential! ✨"
            ]}
        ],
        fifteen_minutes: [
            { emoji: '🍀', text: '15+ Minutes!', class: 'new', messages: [
                "You're building something amazing! 🌈",
                "Quarter hour of commitment! Dedication shows! ⏱️",
                "Fifteen minutes of focus! You're in the zone! 🎯",
                "Your persistence is creating results! 📊",
                "Fifteen minutes milestone! The habit forms! 🌟"
            ]},
            { emoji: '🍀', text: '15+ Minutes!', class: 'new', messages: [
                "Building momentum with every minute! 💨",
                "Fifteen minutes of excellence! Quality time! ⭐",
                "Your commitment deepens! Stronger every day! 💪",
                "Quarter hour achievement! Progress accelerates! 🚀",
                "Fifteen minutes of pure determination! 🔥"
            ]}
        ],
        thirty_minutes: [
            { emoji: '🌳', text: '30+ Minutes!', class: 'building', messages: [
                "Half an hour of dedication! You're unstoppable! ⚡",
                "Thirty minutes of focus! Deep work achieved! 🧠",
                "Half hour milestone! Your commitment shines! ✨",
                "Thirty minutes of progress! Building strength! 💪",
                "Half an hour of excellence! You're crushing it! 🔥"
            ]},
            { emoji: '🌳', text: '30+ Minutes!', class: 'building', messages: [
                "Thirty minutes of pure determination! ⏰",
                "Half hour of commitment! The habit solidifies! 🏗️",
                "Thirty minutes achievement! Momentum builds! 💨",
                "Your dedication spans half an hour! Impressive! 👏",
                "Thirty minutes of focused energy! ⚡"
            ]}
        ],
        one_hour: [
            { emoji: '💪', text: '1+ Hour!', class: 'building', messages: [
                "An hour of focus! Your determination shines! ✨",
                "Sixty minutes of commitment! True dedication! ⏱️",
                "One hour milestone! You're in deep focus! 🌊",
                "An hour of progress! Building real momentum! 💨",
                "Sixty minutes of excellence! You're amazing! ⭐"
            ]},
            { emoji: '💪', text: '1+ Hour!', class: 'building', messages: [
                "One hour of pure determination! 🔥",
                "Sixty minutes of focused energy! 💪",
                "An hour achievement! The zone is yours! 🎯",
                "One hour of commitment! Your strength shows! 🛡️",
                "Sixty minutes milestone! Unstoppable force! ⚡"
            ]}
        ],
        three_hours: [
            { emoji: '💫', text: '3+ Hours!', class: 'building', messages: [
                "Three hours of commitment! You're a force! 🚀",
                "Three hours of focus! Deep work mastery! 🧠",
                "Three hours achievement! Incredible stamina! 💪",
                "Three hours of dedication! Your power grows! ⚡",
                "Three hours milestone! You're unstoppable! 🔥"
            ]},
            { emoji: '💫', text: '3+ Hours!', class: 'building', messages: [
                "Three hours of pure determination! ⏰",
                "Three hours of excellence! Quality focus! ⭐",
                "Three hours achievement! Building empires! 🏗️",
                "Your commitment spans three hours! Amazing! 👏",
                "Three hours of focused energy! 💫"
            ]}
        ],
        six_hours: [
            { emoji: '⭐', text: '6+ Hours!', class: 'building', messages: [
                "Six hours of dedication! You're incredible! 🌟",
                "Six hours of focus! Marathon commitment! 🏃",
                "Six hours achievement! Your endurance shines! 💪",
                "Six hours of progress! Building greatness! 🏗️",
                "Six hours milestone! You're a champion! 🏆"
            ]},
            { emoji: '⭐', text: '6+ Hours!', class: 'building', messages: [
                "Six hours of pure determination! 🔥",
                "Six hours of excellence! Quality sustained! ⭐",
                "Six hours achievement! Deep focus mastery! 🌊",
                "Your commitment spans six hours! Incredible! ⏰",
                "Six hours of focused energy! 💫"
            ]}
        ],
        twelve_hours: [
            { emoji: '✨', text: '12+ Hours!', class: 'strong', messages: [
                "Half a day of consistency! You're amazing! 🎯",
                "Twelve hours of commitment! True dedication! ⏱️",
                "Half day milestone! Your persistence pays! 💰",
                "Twelve hours of progress! Building legacy! 🏛️",
                "Half day achievement! You're unstoppable! ⚡"
            ]},
            { emoji: '✨', text: '12+ Hours!', class: 'strong', messages: [
                "Twelve hours of pure determination! 🔥",
                "Half day of excellence! Quality sustained! ⭐",
                "Twelve hours achievement! Deep focus legend! 🌟",
                "Your commitment spans half a day! Amazing! ⏰",
                "Twelve hours of focused energy! ✨"
            ]}
        ],
        one_day: [
            { emoji: '🎯', text: '1 Day!', class: 'strong', messages: [
                "Your first full day! A beautiful beginning! 🌅",
                "One day achievement! The journey deepens! 🌟",
                "24 hours milestone! Your commitment shines! ✨",
                "One day of dedication! Building real habits! 🏗️",
                "First day complete! Your story unfolds! 📖"
            ]},
            { emoji: '🎯', text: '1 Day!', class: 'strong', messages: [
                "One day of pure determination! 🔥",
                "24 hours of excellence! Quality sustained! ⭐",
                "One day achievement! Foundation solid! 🏛️",
                "Your commitment spans a full day! Amazing! ⏰",
                "One day of focused energy! 🎯"
            ]}
        ],
        two_days: [
            { emoji: '🚀', text: '2 Days!', class: 'strong', messages: [
                "Two days strong! Your momentum is building! 💪",
                "Two days achievement! Consistency emerging! 📈",
                "48 hours milestone! Your dedication grows! 🌱",
                "Two days of progress! Building momentum! 💨",
                "Two days commitment! You're getting stronger! 🛡️"
            ]},
            { emoji: '🚀', text: '2 Days!', class: 'strong', messages: [
                "Two days of pure determination! 🔥",
                "48 hours of excellence! Quality sustained! ⭐",
                "Two days achievement! Pattern forming! 🔄",
                "Your commitment spans two days! Impressive! ⏰",
                "Two days of focused energy! 🚀"
            ]}
        ],
        three_days: [
            { emoji: '⚡', text: '3 Days!', class: 'strong', messages: [
                "Three days of dedication! You're on fire! 🔥",
                "Three days achievement! Real progress shows! 📊",
                "72 hours milestone! Your commitment shines! ✨",
                "Three days of consistency! Building habits! 🏗️",
                "Three days strong! Your determination grows! 💪"
            ]},
            { emoji: '⚡', text: '3 Days!', class: 'strong', messages: [
                "Three days of pure determination! 🔥",
                "72 hours of excellence! Quality sustained! ⭐",
                "Three days achievement! Momentum building! 💨",
                "Your commitment spans three days! Amazing! ⏰",
                "Three days of focused energy! ⚡"
            ]}
        ],
        week_days: [
            { emoji: '💎', text: '{{days}} Days!', class: 'strong', messages: [
                "Day {{days}} and still going! You're a diamond! 💎",
                "Day {{days}} achievement! Your persistence shines! ✨",
                "Day {{days}} milestone! Building real strength! 💪",
                "Day {{days}} of commitment! True dedication! ⏱️",
                "Day {{days}} strong! Your journey continues! 🌟"
            ]},
            { emoji: '💎', text: '{{days}} Days!', class: 'strong', messages: [
                "Day {{days}} of pure determination! 🔥",
                "Day {{days}} of excellence! Quality sustained! ⭐",
                "Day {{days}} achievement! Progress accelerates! 🚀",
                "Your commitment reaches day {{days}}! Amazing! ⏰",
                "Day {{days}} of focused energy! 💎"
            ]}
        ],
        one_week: [
            { emoji: '🌟', text: '1 Week!', class: 'strong', messages: [
                "One full week! You're building real habits! 🌟",
                "Seven days achievement! Consistency emerges! 📅",
                "One week milestone! Your dedication shows! 💪",
                "Seven days of progress! Building momentum! 💨",
                "One week commitment! You're committed! 🔥"
            ]},
            { emoji: '🌟', text: '1 Week!', class: 'strong', messages: [
                "One week of pure determination! 🔥",
                "Seven days of excellence! Quality sustained! ⭐",
                "One week achievement! Pattern established! 🔄",
                "Your commitment spans one week! Impressive! ⏰",
                "One week of focused energy! 🌟"
            ]}
        ],
        two_weeks: [
            { emoji: '⚡', text: '2 Weeks!', class: 'fire', messages: [
                "Two weeks of consistency! You're electric! ⚡",
                "Fourteen days achievement! Real habits form! 📅",
                "Two weeks milestone! Your commitment shines! ✨",
                "Fourteen days of progress! Building strength! 💪",
                "Two weeks commitment! You're unstoppable! 🔥"
            ]},
            { emoji: '⚡', text: '2 Weeks!', class: 'fire', messages: [
                "Two weeks of pure determination! 🔥",
                "Fourteen days of excellence! Quality sustained! ⭐",
                "Two weeks achievement! Deep focus mastery! 🌊",
                "Your commitment spans two weeks! Amazing! ⏰",
                "Two weeks of focused energy! ⚡"
            ]}
        ],
        three_weeks: [
            { emoji: '🎆', text: '3 Weeks!', class: 'fire', messages: [
                "Three weeks! You're a celebration of consistency! 🎆",
                "Twenty-one days achievement! Habits solidified! 📅",
                "Three weeks milestone! Your dedication glows! ✨",
                "Twenty-one days of progress! Building legacy! 🏛️",
                "Three weeks commitment! You're incredible! 🔥"
            ]},
            { emoji: '🎆', text: '3 Weeks!', class: 'fire', messages: [
                "Three weeks of pure determination! 🔥",
                "Twenty-one days of excellence! Quality sustained! ⭐",
                "Three weeks achievement! Transformation complete! ✨",
                "Your commitment spans three weeks! Legendary! ⏰",
                "Three weeks of focused energy! 🎆"
            ]}
        ],
        one_month: [
            { emoji: '👑', text: '1 Month!', class: 'fire', messages: [
                "One month of dedication! You're royalty! 👑",
                "Thirty days achievement! True transformation! 📅",
                "One month milestone! Your commitment reigns! ✨",
                "Thirty days of progress! Building empires! 🏗️",
                "One month commitment! You're a champion! 🏆"
            ]},
            { emoji: '👑', text: '1 Month!', class: 'fire', messages: [
                "One month of pure determination! 🔥",
                "Thirty days of excellence! Quality sustained! ⭐",
                "One month achievement! Legendary status! 👑",
                "Your commitment spans one month! Incredible! ⏰",
                "One month of focused energy! 👑"
            ]}
        ],
        two_months: [
            { emoji: '🥈', text: '2 Months!', class: 'fire', messages: [
                "Two months of excellence! Silver medal worthy! 🥈",
                "Sixty days achievement! True mastery! 📅",
                "Two months milestone! Your dedication shines! ✨",
                "Sixty days of progress! Building greatness! 🏛️",
                "Two months commitment! You're elite! 🏆"
            ]},
            { emoji: '🥈', text: '2 Months!', class: 'fire', messages: [
                "Two months of pure determination! 🔥",
                "Sixty days of excellence! Quality sustained! ⭐",
                "Two months achievement! Champion level! 🥇",
                "Your commitment spans two months! Amazing! ⏰",
                "Two months of focused energy! 🥈"
            ]}
        ],
        hundred_days: [
            { emoji: '💯', text: '100 Days!', class: 'fire', messages: [
                "100 DAYS! You're absolutely legendary! 💯",
                "One hundred days achievement! Century club! 📅",
                "100 days milestone! Your dedication is eternal! ✨",
                "One hundred days of progress! Building legends! 🏛️",
                "100 days commitment! You're a true warrior! ⚔️"
            ]},
            { emoji: '💯', text: '100 Days!', class: 'fire', messages: [
                "100 days of pure determination! 🔥",
                "One hundred days of excellence! Quality sustained! ⭐",
                "100 days achievement! Legendary status! 💯",
                "Your commitment spans 100 days! Incredible! ⏰",
                "100 days of focused energy! 💯"
            ]}
        ],
        legend_days: [
            { emoji: '👑', text: '{{days}} Days LEGEND!', class: 'fire', messages: [
                "Day {{days}} - you're a living legend! 👑",
                "Day {{days}} achievement! Legendary status! 📅",
                "Day {{days}} milestone! Your dedication is eternal! ✨",
                "Day {{days}} of progress! Building eternal legacy! 🏛️",
                "Day {{days}} commitment! You're immortal! 🔥"
            ]},
            { emoji: '👑', text: '{{days}} Days LEGEND!', class: 'fire', messages: [
                "Day {{days}} of pure determination! 🔥",
                "Day {{days}} of excellence! Quality sustained! ⭐",
                "Day {{days}} achievement! God-like focus! 👑",
                "Your commitment reaches day {{days}}! Legendary! ⏰",
                "Day {{days}} of focused energy! 👑"
            ]}
        ],
        champion_days: [
            { emoji: '🌟', text: '{{days}} Days CHAMPION!', class: 'fire', messages: [
                "Day {{days}} - you're an eternal champion! 🌟",
                "Day {{days}} achievement! Champion forever! 📅",
                "Day {{days}} milestone! Your dedication is infinite! ✨",
                "Day {{days}} of progress! Building eternal greatness! 🏛️",
                "Day {{days}} commitment! You're timeless! 🔥"
            ]},
            { emoji: '🌟', text: '{{days}} Days CHAMPION!', class: 'fire', messages: [
                "Day {{days}} of pure determination! 🔥",
                "Day {{days}} of excellence! Quality eternal! ⭐",
                "Day {{days}} achievement! Champion of champions! 🏆",
                "Your commitment spans day {{days}}! Eternal! ⏰",
                "Day {{days}} of focused energy! 🌟"
            ]}
        ]
    }
};

// Goal Tracker Application
class GoalTracker {
    constructor() {
        this.goals = this.loadGoals();
        this.selectedColor = 'gray';
        this.soundEnabled = localStorage.getItem('soundEnabled') !== 'false';
        this.darkMode = localStorage.getItem('darkMode') === 'true';
        this.sortBy = 'newest';
        this.openMenus = this.loadOpenMenus();

        // Initialize AudioContext for sound generation (optimize by reusing)
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.warn('Web Audio API not supported');
            this.audioContext = null;
        }

        // Note: Message caching is now handled directly in goal objects for persistence
        // The temporary messageCache and usedMessages are no longer needed
        this.init();
        this.startUpdateInterval();
    }

    init() {
        this.goalInput = document.getElementById('goalInput');
        this.addGoalBtn = document.getElementById('addGoalBtn');
        this.goalsContainer = document.getElementById('goalsContainer');
        this.emptyState = document.getElementById('emptyState');
        this.statsOverview = document.getElementById('statsOverview');
        this.sortSelect = document.getElementById('sortSelect');
        this.soundToggle = document.getElementById('toggleSound');
        this.darkModeToggle = document.getElementById('toggleDarkMode');

        // Color picker setup
        document.querySelectorAll('.color-option').forEach(option => {
            option.addEventListener('click', (e) => this.selectColor(e.target));
        });
        document.querySelector('.color-option').classList.add('selected');

        // Event listeners
        this.addGoalBtn.addEventListener('click', () => this.addGoal());
        this.goalInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addGoal();
        });
        this.sortSelect.addEventListener('change', (e) => {
            this.sortBy = e.target.value;
            this.render();
        });
        this.soundToggle.addEventListener('click', () => this.toggleSound());
        this.darkModeToggle.addEventListener('click', () => this.toggleDarkMode());
        
        // Update button displays
        this.soundToggle.textContent = this.soundEnabled ? '🔊 Sound On' : '🔇 Sound Off';
        if (!this.soundEnabled) this.soundToggle.classList.add('muted');
        
        // Apply dark mode if enabled
        if (this.darkMode) {
            document.body.classList.add('dark-mode');
            this.darkModeToggle.textContent = '☀️ Light Mode';
        } else {
            this.darkModeToggle.textContent = '🌙 Dark Mode';
        }

        this.render();
    }

    selectColor(element) {
        document.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('selected'));
        element.classList.add('selected');
        this.selectedColor = element.dataset.color;
    }

    toggleSound() {
        this.soundEnabled = !this.soundEnabled;
        localStorage.setItem('soundEnabled', this.soundEnabled);
        this.soundToggle.textContent = this.soundEnabled ? '🔊 Sound On' : '🔇 Sound Off';
        this.soundToggle.classList.toggle('muted');
        if (this.soundEnabled) this.playSound('success');
    }

    toggleDarkMode() {
        this.darkMode = !this.darkMode;
        localStorage.setItem('darkMode', this.darkMode);
        document.body.classList.toggle('dark-mode');
        this.darkModeToggle.textContent = this.darkMode ? '☀️ Light Mode' : '🌙 Dark Mode';
        this.playSound('success');
    }

    playSound(type) {
        if (!this.soundEnabled || !this.audioContext) return;

        // Resume AudioContext if it's suspended (required by modern browsers)
        if (this.audioContext.state === 'suspended') {
            this.audioContext.resume();
        }

        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        if (type === 'success') {
            oscillator.frequency.value = 800;
            gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.3);
            oscillator.start(this.audioContext.currentTime);
            oscillator.stop(this.audioContext.currentTime + 0.3);
        } else if (type === 'milestone') {
            [600, 800, 1000].forEach((freq, i) => {
                const osc = this.audioContext.createOscillator();
                const gain = this.audioContext.createGain();
                osc.connect(gain);
                gain.connect(this.audioContext.destination);
                osc.frequency.value = freq;
                gain.gain.setValueAtTime(0.2, this.audioContext.currentTime + i * 0.1);
                gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + i * 0.1 + 0.3);
                osc.start(this.audioContext.currentTime + i * 0.1);
                osc.stop(this.audioContext.currentTime + i * 0.1 + 0.3);
            });
        }
    }

    addGoal() {
        const goalName = this.goalInput.value.trim();
        
        if (!goalName) {
            alert('Please enter a goal name!');
            return;
        }

        // Generate initial messages for the new goal
        const initialTime = this.calculateTimeElapsed(Date.now(), 0, false, null);
        const initialBadge = this.getStreakBadge(Date.now(), initialTime);
        const initialMotivationalMsg = this.getMotivationalMessage(Date.now(), initialTime.days);

        const goal = {
            id: Date.now(),
            name: goalName,
            startTime: Date.now(),
            color: this.selectedColor,
            isPaused: false,
            pausedTime: 0,
            pausedAt: null,
            bestStreak: 0,
            notes: '',
            cachedBadge: {
                emoji: initialBadge.emoji,
                text: initialBadge.text,
                class: initialBadge.class,
                message: initialBadge.message
            },
            cachedMotivationalMsg: initialMotivationalMsg
        };

        this.goals.push(goal);
        this.saveGoals();
        this.goalInput.value = '';
        this.playSound('success');
        this.render();
    }

    pauseGoal(goalId) {
        const goal = this.goals.find(g => g.id === goalId);
        if (goal) {
            if (goal.isPaused) {
                // Resume
                const pauseDuration = Date.now() - goal.pausedAt;
                goal.pausedTime += pauseDuration;
                goal.isPaused = false;
                goal.pausedAt = null;
            } else {
                // Pause
                goal.isPaused = true;
                goal.pausedAt = Date.now();
            }
            this.saveGoals();
            this.render();
        }
    }

    resetGoal(goalId) {
        const goal = this.goals.find(g => g.id === goalId);
        if (goal) {
            const time = this.calculateTimeElapsed(goal.startTime, goal.pausedTime, goal.isPaused, goal.pausedAt);
            const currentStreak = time.days;
            
            const confirmReset = confirm(`Reset streak for "${goal.name}"?\n\nCurrent streak: ${currentStreak} days\nBest streak: ${goal.bestStreak} days`);
            if (confirmReset) {
                // Update best streak if current is better
                if (currentStreak > goal.bestStreak) {
                    goal.bestStreak = currentStreak;
                }

                goal.startTime = Date.now();
                goal.pausedTime = 0;
                goal.isPaused = false;
                goal.pausedAt = null;

                // Clear cached messages so new ones will be generated for the reset goal
                goal.cachedBadge = null;
                goal.cachedMotivationalMsg = null;
                this.saveGoals();
                this.render();
            }
        }
    }

    deleteGoal(goalId) {
        const goal = this.goals.find(g => g.id === goalId);
        if (goal) {
            const confirmDelete = confirm(`Delete "${goal.name}"?`);
            if (confirmDelete) {
                this.goals = this.goals.filter(g => g.id !== goalId);
                this.clearGoalMessages(goalId); // Clean up message tracking
                this.saveGoals();
                this.render();
            }
        }
    }

    calculateTimeElapsed(startTime, pausedTime = 0, isPaused = false, pausedAt = null) {
        const now = Date.now();
        let elapsed = now - startTime - pausedTime;
        
        // If currently paused, subtract the current pause duration
        if (isPaused && pausedAt) {
            elapsed -= (now - pausedAt);
        }
        
        const seconds = Math.floor(elapsed / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        
        const remainingHours = hours % 24;
        const remainingMinutes = minutes % 60;
        const remainingSeconds = seconds % 60;

        return {
            days,
            hours: remainingHours,
            minutes: remainingMinutes,
            seconds: remainingSeconds,
            totalHours: hours,
            totalMinutes: minutes
        };
    }

    formatTime(value) {
        return value.toString().padStart(2, '0');
    }

    getStreakBadge(goalId, time) {
        const { days, totalHours, totalMinutes } = time;

        // Very granular for first 24 hours
        if (days === 0) {
            if (totalMinutes < 5) {
                const badgeOption = this.selectUniqueMessage(goalId, 'badge', 'just_started');
                return {
                    emoji: badgeOption.emoji,
                    text: badgeOption.text,
                    class: badgeOption.class,
                    message: badgeOption.messages[Math.floor(Math.random() * badgeOption.messages.length)]
                };
            }
            if (totalMinutes < 15) {
                const badgeOption = this.selectUniqueMessage(goalId, 'badge', 'five_minutes');
                return {
                    emoji: badgeOption.emoji,
                    text: badgeOption.text,
                    class: badgeOption.class,
                    message: badgeOption.messages[Math.floor(Math.random() * badgeOption.messages.length)]
                };
            }
            if (totalMinutes < 30) {
                const badgeOption = this.selectUniqueMessage(goalId, 'badge', 'fifteen_minutes');
                return {
                    emoji: badgeOption.emoji,
                    text: badgeOption.text,
                    class: badgeOption.class,
                    message: badgeOption.messages[Math.floor(Math.random() * badgeOption.messages.length)]
                };
            }
            if (totalHours < 1) {
                const badgeOption = this.selectUniqueMessage(goalId, 'badge', 'thirty_minutes');
                return {
                    emoji: badgeOption.emoji,
                    text: badgeOption.text,
                    class: badgeOption.class,
                    message: badgeOption.messages[Math.floor(Math.random() * badgeOption.messages.length)]
                };
            }
            if (totalHours < 3) {
                const badgeOption = this.selectUniqueMessage(goalId, 'badge', 'one_hour');
                return {
                    emoji: badgeOption.emoji,
                    text: badgeOption.text,
                    class: badgeOption.class,
                    message: badgeOption.messages[Math.floor(Math.random() * badgeOption.messages.length)]
                };
            }
            if (totalHours < 6) {
                const badgeOption = this.selectUniqueMessage(goalId, 'badge', 'three_hours');
                return {
                    emoji: badgeOption.emoji,
                    text: badgeOption.text,
                    class: badgeOption.class,
                    message: badgeOption.messages[Math.floor(Math.random() * badgeOption.messages.length)]
                };
            }
            if (totalHours < 12) {
                const badgeOption = this.selectUniqueMessage(goalId, 'badge', 'six_hours');
                return {
                    emoji: badgeOption.emoji,
                    text: badgeOption.text,
                    class: badgeOption.class,
                    message: badgeOption.messages[Math.floor(Math.random() * badgeOption.messages.length)]
                };
            }
            const badgeOption = this.selectUniqueMessage(goalId, 'badge', 'twelve_hours');
            return {
                emoji: badgeOption.emoji,
                text: badgeOption.text,
                class: badgeOption.class,
                message: badgeOption.messages[Math.floor(Math.random() * badgeOption.messages.length)]
            };
        }

        // Day-based milestones
        if (days === 1) {
            const badgeOption = this.selectUniqueMessage(goalId, 'badge', 'one_day');
            return {
                emoji: badgeOption.emoji,
                text: badgeOption.text,
                class: badgeOption.class,
                message: badgeOption.messages[Math.floor(Math.random() * badgeOption.messages.length)]
            };
        }
        if (days === 2) {
            const badgeOption = this.selectUniqueMessage(goalId, 'badge', 'two_days');
            return {
                emoji: badgeOption.emoji,
                text: badgeOption.text,
                class: badgeOption.class,
                message: badgeOption.messages[Math.floor(Math.random() * badgeOption.messages.length)]
            };
        }
        if (days === 3) {
            const badgeOption = this.selectUniqueMessage(goalId, 'badge', 'three_days');
            return {
                emoji: badgeOption.emoji,
                text: badgeOption.text,
                class: badgeOption.class,
                message: badgeOption.messages[Math.floor(Math.random() * badgeOption.messages.length)]
            };
        }
        if (days < 7) {
            const badgeOption = this.selectUniqueMessage(goalId, 'badge', 'week_days');
            return {
                emoji: badgeOption.emoji,
                text: badgeOption.text.replace('{{days}}', days),
                class: badgeOption.class,
                message: badgeOption.messages[Math.floor(Math.random() * badgeOption.messages.length)].replace(/\{\{days\}\}/g, days)
            };
        }
        if (days === 7) {
            const badgeOption = this.selectUniqueMessage(goalId, 'badge', 'one_week');
            return {
                emoji: badgeOption.emoji,
                text: badgeOption.text,
                class: badgeOption.class,
                message: badgeOption.messages[Math.floor(Math.random() * badgeOption.messages.length)]
            };
        }
        if (days < 14) {
            const badgeOption = this.selectUniqueMessage(goalId, 'badge', 'week_days');
            return {
                emoji: badgeOption.emoji,
                text: badgeOption.text.replace('{{days}}', days),
                class: badgeOption.class,
                message: badgeOption.messages[Math.floor(Math.random() * badgeOption.messages.length)].replace(/\{\{days\}\}/g, days)
            };
        }
        if (days === 14) {
            const badgeOption = this.selectUniqueMessage(goalId, 'badge', 'two_weeks');
            return {
                emoji: badgeOption.emoji,
                text: badgeOption.text,
                class: badgeOption.class,
                message: badgeOption.messages[Math.floor(Math.random() * badgeOption.messages.length)]
            };
        }
        if (days < 21) {
            const badgeOption = this.selectUniqueMessage(goalId, 'badge', 'week_days');
            return {
                emoji: badgeOption.emoji,
                text: badgeOption.text.replace('{{days}}', days),
                class: badgeOption.class,
                message: badgeOption.messages[Math.floor(Math.random() * badgeOption.messages.length)].replace(/\{\{days\}\}/g, days)
            };
        }
        if (days === 21) {
            const badgeOption = this.selectUniqueMessage(goalId, 'badge', 'three_weeks');
            return {
                emoji: badgeOption.emoji,
                text: badgeOption.text,
                class: badgeOption.class,
                message: badgeOption.messages[Math.floor(Math.random() * badgeOption.messages.length)]
            };
        }
        if (days < 30) {
            const badgeOption = this.selectUniqueMessage(goalId, 'badge', 'week_days');
            return {
                emoji: badgeOption.emoji,
                text: badgeOption.text.replace('{{days}}', days),
                class: badgeOption.class,
                message: badgeOption.messages[Math.floor(Math.random() * badgeOption.messages.length)].replace(/\{\{days\}\}/g, days)
            };
        }
        if (days === 30) {
            const badgeOption = this.selectUniqueMessage(goalId, 'badge', 'one_month');
            return {
                emoji: badgeOption.emoji,
                text: badgeOption.text,
                class: badgeOption.class,
                message: badgeOption.messages[Math.floor(Math.random() * badgeOption.messages.length)]
            };
        }
        if (days < 60) {
            const badgeOption = this.selectUniqueMessage(goalId, 'badge', 'week_days');
            return {
                emoji: badgeOption.emoji,
                text: badgeOption.text.replace('{{days}}', days),
                class: badgeOption.class,
                message: badgeOption.messages[Math.floor(Math.random() * badgeOption.messages.length)].replace(/\{\{days\}\}/g, days)
            };
        }
        if (days === 60) {
            const badgeOption = this.selectUniqueMessage(goalId, 'badge', 'two_months');
            return {
                emoji: badgeOption.emoji,
                text: badgeOption.text,
                class: badgeOption.class,
                message: badgeOption.messages[Math.floor(Math.random() * badgeOption.messages.length)]
            };
        }
        if (days < 100) {
            const badgeOption = this.selectUniqueMessage(goalId, 'badge', 'legend_days');
            return {
                emoji: badgeOption.emoji,
                text: badgeOption.text.replace('{{days}}', days),
                class: badgeOption.class,
                message: badgeOption.messages[Math.floor(Math.random() * badgeOption.messages.length)].replace(/\{\{days\}\}/g, days)
            };
        }
        if (days === 100) {
            const badgeOption = this.selectUniqueMessage(goalId, 'badge', 'hundred_days');
            return {
                emoji: badgeOption.emoji,
                text: badgeOption.text,
                class: badgeOption.class,
                message: badgeOption.messages[Math.floor(Math.random() * badgeOption.messages.length)]
            };
        }
        if (days < 365) {
            const badgeOption = this.selectUniqueMessage(goalId, 'badge', 'legend_days');
            return {
                emoji: badgeOption.emoji,
                text: badgeOption.text.replace('{{days}}', days),
                class: badgeOption.class,
                message: badgeOption.messages[Math.floor(Math.random() * badgeOption.messages.length)].replace(/\{\{days\}\}/g, days)
            };
        }
        const badgeOption = this.selectUniqueMessage(goalId, 'badge', 'champion_days');
        return {
            emoji: badgeOption.emoji,
            text: badgeOption.text.replace('{{days}}', days),
            class: badgeOption.class,
            message: badgeOption.messages[Math.floor(Math.random() * badgeOption.messages.length)].replace(/\{\{days\}\}/g, days)
        };
    }

    getNextMilestone(time) {
        const { days, totalMinutes } = time;
        
        // Hour-based milestones for first day
        if (days === 0) {
            const hourMilestones = [5, 15, 30, 60, 180, 360, 720, 1440]; // minutes
            for (let milestone of hourMilestones) {
                if (totalMinutes < milestone) {
                    const label = milestone < 60 ? `${milestone} min` : `${milestone / 60} hr`;
                    return { next: milestone, progress: (totalMinutes / milestone) * 100, label };
                }
            }
        }
        
        // Day-based milestones
        const dayMilestones = [1, 2, 3, 7, 14, 21, 30, 60, 100, 365];
        for (let milestone of dayMilestones) {
            if (days < milestone) {
                return { next: milestone, progress: (days / milestone) * 100, label: `${milestone} day${milestone > 1 ? 's' : ''}` };
            }
        }
        return { next: null, progress: 100, label: 'max' };
    }

    getMotivationalMessage(goalId, days) {
        // Check for specific milestone messages first
        if (days === 0) {
            return this.selectUniqueMessage(goalId, 'general', 0);
        }
        if (days === 1) {
            return this.selectUniqueMessage(goalId, 'general', 1);
        }
        if (days === 7) {
            return this.selectUniqueMessage(goalId, 'general', 7);
        }
        if (days === 30) {
            return this.selectUniqueMessage(goalId, 'general', 30);
        }
        if (days === 100) {
            return this.selectUniqueMessage(goalId, 'general', 100);
        }

        // For non-milestone days, use the general message pool with variety
        const messageIndex = Math.floor(Math.random() * MESSAGE_ALTERNATIVES.general.default.length);
        const messageOptions = MESSAGE_ALTERNATIVES.general.default[messageIndex];
        return this.selectUniqueMessage(goalId, 'general', messageIndex, messageOptions);
    }

    getColorGradient(color) {
        const colors = {
            gray: '#6b7280',
            blue: '#3b82f6',
            green: '#10b981',
            amber: '#f59e0b',
            rose: '#f43f5e',
            purple: '#8b5cf6'
        };
        return colors[color] || colors.gray;
    }

    getBorderColor(color) {
        const colors = {
            gray: '#6b7280',
            blue: '#3b82f6',
            green: '#10b981',
            amber: '#f59e0b',
            rose: '#f43f5e',
            purple: '#8b5cf6'
        };
        return colors[color] || colors.gray;
    }

    toggleNotes(goalId) {
        const goal = this.goals.find(g => g.id === goalId);
        if (!goal) return;

        const card = document.querySelector(`[data-goal-id="${goalId}"]`);
        const existingNotes = card.querySelector('.goal-notes');

        if (existingNotes) {
            existingNotes.remove();
        } else {
            const notesDiv = document.createElement('div');
            notesDiv.className = 'goal-notes';
            notesDiv.innerHTML = goal.notes ? `
                <div class="note-display">"${goal.notes}"</div>
                <button class="edit-note-btn">✏️ Edit Note</button>
            ` : `
                <textarea placeholder="Add notes about your goal, feelings, or progress..."></textarea>
                <button class="save-note-btn">💾 Save Note</button>
            `;

            card.appendChild(notesDiv);

            const saveBtn = notesDiv.querySelector('.save-note-btn');
            const editBtn = notesDiv.querySelector('.edit-note-btn');

            if (saveBtn) {
                saveBtn.addEventListener('click', () => {
                    const textarea = notesDiv.querySelector('textarea');
                    goal.notes = textarea.value.trim();
                    this.saveGoals();
                    this.toggleNotes(goalId);
                    this.toggleNotes(goalId);
                });
            }

            if (editBtn) {
                editBtn.addEventListener('click', () => {
                    notesDiv.innerHTML = `
                        <textarea>${goal.notes}</textarea>
                        <button class="save-note-btn">💾 Save Note</button>
                    `;
                    notesDiv.querySelector('.save-note-btn').addEventListener('click', () => {
                        const textarea = notesDiv.querySelector('textarea');
                        goal.notes = textarea.value.trim();
                        this.saveGoals();
                        this.toggleNotes(goalId);
                        this.toggleNotes(goalId);
                    });
                });
            }
        }
    }

    toggleColorPicker(goalId) {
        const goal = this.goals.find(g => g.id === goalId);
        if (!goal) return;

        const card = document.querySelector(`[data-goal-id="${goalId}"]`);
        const existingPicker = card.querySelector('.color-picker-inline');

        if (existingPicker) {
            existingPicker.remove();
        } else {
            const pickerDiv = document.createElement('div');
            pickerDiv.className = 'color-picker-inline';
            pickerDiv.innerHTML = `
                <div class="color-option-inline ${goal.color === 'gray' ? 'selected' : ''}" data-color="gray" style="background: #6b7280" title="Gray"></div>
                <div class="color-option-inline ${goal.color === 'blue' ? 'selected' : ''}" data-color="blue" style="background: #3b82f6" title="Blue"></div>
                <div class="color-option-inline ${goal.color === 'green' ? 'selected' : ''}" data-color="green" style="background: #10b981" title="Green"></div>
                <div class="color-option-inline ${goal.color === 'amber' ? 'selected' : ''}" data-color="amber" style="background: #f59e0b" title="Amber"></div>
                <div class="color-option-inline ${goal.color === 'rose' ? 'selected' : ''}" data-color="rose" style="background: #f43f5e" title="Rose"></div>
                <div class="color-option-inline ${goal.color === 'purple' ? 'selected' : ''}" data-color="purple" style="background: #8b5cf6" title="Purple"></div>
            `;

            card.appendChild(pickerDiv);

            pickerDiv.querySelectorAll('.color-option-inline').forEach(option => {
                option.addEventListener('click', (e) => {
                    const newColor = e.target.dataset.color;
                    this.changeGoalColor(goalId, newColor);
                    pickerDiv.remove();
                });
            });
        }
    }

    changeGoalColor(goalId, newColor) {
        const goal = this.goals.find(g => g.id === goalId);
        if (goal) {
            goal.color = newColor;
            this.saveGoals();
            this.render();
            this.playSound('success');
        }
    }

    toggleGoalActions(goalId) {
        const card = document.querySelector(`[data-goal-id="${goalId}"]`);
        if (!card) return;

        const menu = card.querySelector('.goal-actions-menu');
        const actions = card.querySelector('.goal-actions');
        const toggle = card.querySelector('.goal-toggle');

        const isVisible = menu.classList.contains('visible');

        if (isVisible) {
            // Collapse
            menu.classList.remove('visible');
            actions.classList.add('collapsed');
            toggle.classList.remove('expanded');
            toggle.setAttribute('aria-expanded', 'false');
            card.classList.remove('expanded');
            // Remove from open menus
            this.openMenus = this.openMenus.filter(id => id !== goalId);
        } else {
            // Expand
            menu.classList.add('visible');
            actions.classList.remove('collapsed');
            toggle.classList.add('expanded');
            toggle.setAttribute('aria-expanded', 'true');
            card.classList.add('expanded');
            // Add to open menus
            if (!this.openMenus.includes(goalId)) {
                this.openMenus.push(goalId);
            }
        }
        
        // Save open menus state
        this.saveOpenMenus();
    }

    createGoalCard(goal) {
        const time = this.calculateTimeElapsed(goal.startTime, goal.pausedTime, goal.isPaused, goal.pausedAt);

        // Use cached messages if available, otherwise generate new ones (for backward compatibility)
        let badge, motivationalMsg;
        if (goal.cachedBadge && goal.cachedMotivationalMsg) {
            // Use cached messages
            badge = goal.cachedBadge;
            motivationalMsg = goal.cachedMotivationalMsg;
        } else {
            // Generate new messages for goals without cached messages (backward compatibility)
            badge = this.getStreakBadge(goal.id, time);
            motivationalMsg = badge.message || this.getMotivationalMessage(goal.id, time.days);

            // Cache the newly generated messages
            goal.cachedBadge = {
                emoji: badge.emoji,
                text: badge.text,
                class: badge.class,
                message: badge.message
            };
            goal.cachedMotivationalMsg = motivationalMsg;
        }

        const milestone = this.getNextMilestone(time);
        
        const card = document.createElement('div');
        const isMenuOpen = this.openMenus.includes(goal.id);
        card.className = goal.isPaused ? 'goal-card paused' : 'goal-card';
        if (isMenuOpen) {
            card.classList.add('expanded');
        }
        card.setAttribute('data-goal-id', goal.id);
        card.style.borderLeftColor = this.getBorderColor(goal.color);
        
        let milestoneHTML = '';
        if (milestone.next !== null) {
            milestoneHTML = `
                <div class="progress-bar-container">
                    <div class="progress-bar">
                        <div class="progress-bar-fill" style="width: ${milestone.progress}%; background: ${this.getColorGradient(goal.color)}"></div>
                    </div>
                    <div class="milestone-text">Next: ${milestone.label} 🎯 (${Math.round(milestone.progress)}%)</div>
                </div>
            `;
        } else {
            milestoneHTML = `
                <div class="progress-bar-container">
                    <div class="milestone-text achieved">🎉 All milestones unlocked! Keep going! 🎉</div>
                </div>
            `;
        }
        
        const bestStreakHTML = goal.bestStreak > 0 ? `
            <div class="best-streak">🏆 Best Streak: ${goal.bestStreak} day${goal.bestStreak === 1 ? '' : 's'}</div>
        ` : '';
        
        card.innerHTML = `
            <div class="goal-content">
                <div class="goal-header">
                    <h3 class="goal-title">
                        ${this.escapeHtml(goal.name)}
                        <span class="streak-badge ${badge.class}">${badge.emoji} ${badge.text}</span>
                    </h3>
                    <button class="goal-toggle ${isMenuOpen ? 'expanded' : ''}" data-id="${goal.id}" tabindex="0" aria-label="Toggle controls" aria-expanded="${isMenuOpen}">⋮</button>
                </div>
                ${milestoneHTML}
                ${bestStreakHTML}
                <div class="goal-stats">
                    <div class="stat-box">
                        <div class="stat-value">${time.days}</div>
                        <div class="stat-label">Days</div>
                    </div>
                    <div class="stat-box">
                        <div class="stat-value">${this.formatTime(time.hours)}</div>
                        <div class="stat-label">Hours</div>
                    </div>
                    <div class="stat-box">
                        <div class="stat-value">${this.formatTime(time.minutes)}</div>
                        <div class="stat-label">Minutes</div>
                    </div>
                    <div class="stat-box">
                        <div class="stat-value">${this.formatTime(time.seconds)}</div>
                        <div class="stat-label">Seconds</div>
                    </div>
                </div>
                <div class="motivational-message">${motivationalMsg}</div>
            </div>
            <div class="goal-actions-menu ${isMenuOpen ? 'visible' : ''}">
                <div class="goal-actions ${isMenuOpen ? '' : 'collapsed'}">
                    <button class="btn-color" data-id="${goal.id}">🎨 Color</button>
                    <button class="btn-pause" data-id="${goal.id}">${goal.isPaused ? '▶️ Resume' : '⏸️ Pause'}</button>
                    <button class="btn-notes" data-id="${goal.id}">📝 Notes</button>
                    <button class="btn-reset" data-id="${goal.id}">🔄 Reset</button>
                    <button class="btn-delete" data-id="${goal.id}">🗑️ Delete</button>
                </div>
            </div>
        `;

        // Add event listeners
        card.querySelector('.btn-color').addEventListener('click', () => {
            this.toggleColorPicker(goal.id);
        });

        card.querySelector('.btn-pause').addEventListener('click', () => {
            this.pauseGoal(goal.id);
        });

        card.querySelector('.btn-notes').addEventListener('click', () => {
            this.toggleNotes(goal.id);
        });

        card.querySelector('.btn-reset').addEventListener('click', () => {
            this.resetGoal(goal.id);
        });

        card.querySelector('.btn-delete').addEventListener('click', () => {
            this.deleteGoal(goal.id);
        });

        // Add toggle button event listener
        const toggleButton = card.querySelector('.goal-toggle');
        toggleButton.addEventListener('click', (e) => {
            this.toggleGoalActions(goal.id);
            e.stopPropagation(); // Prevent event bubbling
        });

        // Add keyboard navigation support
        toggleButton.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                this.toggleGoalActions(goal.id);
                e.preventDefault();
                e.stopPropagation();
            }
        });

        return card;
    }

    updateOverallStats() {
        if (this.goals.length === 0) {
            this.statsOverview.classList.add('hidden');
            return;
        }

        this.statsOverview.classList.remove('hidden');
        
        let totalDays = 0;
        let longestStreak = 0;
        let activeGoals = 0;
        
        this.goals.forEach(goal => {
            const time = this.calculateTimeElapsed(goal.startTime, goal.pausedTime, goal.isPaused, goal.pausedAt);
            totalDays += time.days;
            if (time.days > longestStreak) longestStreak = time.days;
            if (!goal.isPaused) activeGoals++;
        });
        
        const titleColor = this.darkMode ? '#f3f4f6' : '#374151';
        this.statsOverview.innerHTML = `
            <h3 style="margin-bottom: 10px; color: ${titleColor};">📊 Your Overall Progress</h3>
            <div class="stats-grid">
                <div class="overall-stat">
                    <div class="overall-stat-value">${this.goals.length}</div>
                    <div class="overall-stat-label">Total Goals</div>
                </div>
                <div class="overall-stat">
                    <div class="overall-stat-value">${activeGoals}</div>
                    <div class="overall-stat-label">Active</div>
                </div>
                <div class="overall-stat">
                    <div class="overall-stat-value">${totalDays}</div>
                    <div class="overall-stat-label">Total Days</div>
                </div>
                <div class="overall-stat">
                    <div class="overall-stat-value">${longestStreak}</div>
                    <div class="overall-stat-label">Longest Streak</div>
                </div>
            </div>
        `;
    }

    sortGoals() {
        switch(this.sortBy) {
            case 'newest':
                this.goals.sort((a, b) => b.id - a.id);
                break;
            case 'oldest':
                this.goals.sort((a, b) => a.id - b.id);
                break;
            case 'longest':
                this.goals.sort((a, b) => {
                    const timeA = this.calculateTimeElapsed(a.startTime, a.pausedTime, a.isPaused, a.pausedAt);
                    const timeB = this.calculateTimeElapsed(b.startTime, b.pausedTime, b.isPaused, b.pausedAt);
                    return timeB.days - timeA.days;
                });
                break;
            case 'shortest':
                this.goals.sort((a, b) => {
                    const timeA = this.calculateTimeElapsed(a.startTime, a.pausedTime, a.isPaused, a.pausedAt);
                    const timeB = this.calculateTimeElapsed(b.startTime, b.pausedTime, b.isPaused, b.pausedAt);
                    return timeA.days - timeB.days;
                });
                break;
        }
    }

    render() {
        this.goalsContainer.innerHTML = '';
        this.updateOverallStats();

        if (this.goals.length === 0) {
            this.emptyState.classList.remove('hidden');
            return;
        }

        this.emptyState.classList.add('hidden');
        
        this.sortGoals();

        this.goals.forEach(goal => {
            const card = this.createGoalCard(goal);
            this.goalsContainer.appendChild(card);
        });
    }

    showCelebration(emoji) {
        const celebration = document.createElement('div');
        celebration.className = 'celebration';
        celebration.textContent = emoji;
        document.body.appendChild(celebration);
        
        setTimeout(() => {
            celebration.remove();
        }, 1000);
    }

    updateTimes() {
        // Only update the time values, not the entire DOM
        this.goals.forEach(goal => {
            const time = this.calculateTimeElapsed(goal.startTime, goal.pausedTime, goal.isPaused, goal.pausedAt);
            const card = document.querySelector(`[data-goal-id="${goal.id}"]`);

            if (card) {
                const statValues = card.querySelectorAll('.stat-value');
                if (statValues.length === 4) {
                    const oldDays = parseInt(statValues[0].textContent);
                    statValues[0].textContent = time.days;
                    statValues[1].textContent = this.formatTime(time.hours);
                    statValues[2].textContent = this.formatTime(time.minutes);
                    statValues[3].textContent = this.formatTime(time.seconds);

                    // Check for milestone achievements and show celebration
                    if (time.days > oldDays && !isNaN(oldDays) && !goal.isPaused) {
                        const milestones = [1, 2, 3, 7, 14, 21, 30, 60, 100, 365];
                        if (milestones.includes(time.days)) {
                            this.showCelebration('🎉🎊🏆');
                            this.playSound('milestone');

                            // Update cached messages for the new milestone
                            const newBadge = this.getStreakBadge(goal.id, time);
                            const newMotivationalMsg = this.getMotivationalMessage(goal.id, time.days);

                            goal.cachedBadge = {
                                emoji: newBadge.emoji,
                                text: newBadge.text,
                                class: newBadge.class,
                                message: newBadge.message
                            };
                            goal.cachedMotivationalMsg = newMotivationalMsg;
                            this.saveGoals();
                        }
                    }

                    // Update progress bar
                    const milestone = this.getNextMilestone(time);
                    const progressFill = card.querySelector('.progress-bar-fill');
                    const milestoneText = card.querySelector('.milestone-text');

                    if (progressFill && milestone.next !== null) {
                        progressFill.style.width = `${milestone.progress}%`;
                        milestoneText.textContent = `Next: ${milestone.label} 🎯 (${Math.round(milestone.progress)}%)`;
                    }

                    // Motivational messages and badges should NOT be updated here - they are set once when the card is created
                    // and should remain consistent for each goal unless explicitly changed
                }
            }
        });

        // Update overall stats
        this.updateOverallStats();
    }

    startUpdateInterval() {
        // Update only the time values every second
        setInterval(() => {
            if (this.goals.length > 0) {
                this.updateTimes();
            }
        }, 1000);
    }

    saveGoals() {
        localStorage.setItem('goalTrackerData', JSON.stringify(this.goals));
    }

    loadGoals() {
        const saved = localStorage.getItem('goalTrackerData');
        const goals = saved ? JSON.parse(saved) : [];

        // Ensure existing goals have required properties
        goals.forEach(goal => {
            if (!goal.color) {
                goal.color = 'gray'; // Default color for existing goals
            }
            // Initialize cached messages for existing goals that don't have them
            if (!goal.cachedBadge) {
                goal.cachedBadge = null;
            }
            if (!goal.cachedMotivationalMsg) {
                goal.cachedMotivationalMsg = null;
            }
        });

        return goals;
    }

    loadOpenMenus() {
        const saved = localStorage.getItem('openMenusState');
        return saved ? JSON.parse(saved) : [];
    }

    saveOpenMenus() {
        localStorage.setItem('openMenusState', JSON.stringify(this.openMenus));
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Simplified message selection - now uses persistent caching in goal objects
    selectUniqueMessage(goalId, category, key, alternatives = null) {
        // Get available alternatives
        let messageOptions = [];
        if (alternatives) {
            messageOptions = alternatives;
        } else {
            // Use default alternatives structure
            if (category === 'general') {
                if (MESSAGE_ALTERNATIVES.general.milestones[key]) {
                    messageOptions = MESSAGE_ALTERNATIVES.general.milestones[key];
                } else {
                    // For general messages, select from the default array based on index
                    const defaultMessages = MESSAGE_ALTERNATIVES.general.default;
                    messageOptions = defaultMessages[key % defaultMessages.length] || [defaultMessages[0][0]];
                }
            } else if (category === 'badge') {
                if (MESSAGE_ALTERNATIVES.streak_badges[key]) {
                    messageOptions = MESSAGE_ALTERNATIVES.streak_badges[key];
                }
            }
        }

        // Select randomly from available options
        let selectedOption;
        if (typeof messageOptions[0] === 'string') {
            // Simple string array
            selectedOption = messageOptions[Math.floor(Math.random() * messageOptions.length)];
        } else {
            // Badge object array
            selectedOption = messageOptions[Math.floor(Math.random() * messageOptions.length)];
        }

        return selectedOption;
    }

    // Legacy cleanup methods (no longer used with persistent caching)
    clearGoalMessages(goalId) {
        // This method is now a no-op since message tracking is handled in goal objects
    }

    refreshMessageCache() {
        // Optional method to refresh all cached messages (for variety)
        this.goals.forEach(goal => {
            goal.cachedBadge = null;
            goal.cachedMotivationalMsg = null;
        });
        this.saveGoals();
        this.render(); // This will trigger new message selection
    }

    // Method to manually refresh a specific goal's messages
    refreshGoalMessages(goalId) {
        const goal = this.goals.find(g => g.id === goalId);
        if (goal) {
            goal.cachedBadge = null;
            goal.cachedMotivationalMsg = null;
            this.saveGoals();
            this.render();
        }
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new GoalTracker();
});
