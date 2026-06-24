// 模拟世界杯数据
const worldCupData = {
    todayMatches: [
        {
            id: 1,
            time: '2026-06-12 03:00',
            team1: { name: '墨西哥', flag: '🇲🇽', ranking: 15 },
            team2: { name: '南非', flag: '🇿🇦', ranking: 55 },
            venue: '墨西哥城阿兹特克体育场',
            group: 'A组',
            analysis: {
                recentForm: {
                    team1: ['胜', '平', '胜', '负', '胜'],
                    team2: ['负', '胜', '负', '平', '负']
                },
                headToHead: {
                    total: 5,
                    team1Wins: 3,
                    draws: 1,
                    team2Wins: 1,
                    lastMatch: '2022年友谊赛 墨西哥 2-0 南非'
                },
                keyPlayers: {
                    team1: ['洛萨诺', '阿尔瓦雷斯', '吉梅内斯'],
                    team2: ['陶·恩比恩耶马', 'Zwane', 'Percy Tau']
                },
                prediction: '墨西哥主场优势明显，预计获胜概率65%',
                odds: { team1: 1.45, draw: 4.20, team2: 7.50 }
            }
        },
        {
            id: 2,
            time: '2026-06-12 10:00',
            team1: { name: '韩国', flag: '🇰🇷', ranking: 28 },
            team2: { name: '捷克', flag: '🇨🇿', ranking: 38 },
            venue: '萨波潘阿克伦体育场',
            group: 'A组',
            analysis: {
                recentForm: {
                    team1: ['胜', '负', '平', '胜', '胜'],
                    team2: ['平', '胜', '负', '胜', '平']
                },
                headToHead: {
                    total: 3,
                    team1Wins: 1,
                    draws: 1,
                    team2Wins: 1,
                    lastMatch: '2024年友谊赛 韩国 1-1 捷克'
                },
                keyPlayers: {
                    team1: ['孙兴慜', '金玟哉', '李刚仁'],
                    team2: ['希克', '绍切克', '科瓦尔']
                },
                prediction: '势均力敌，韩国队孙兴慜状态出色，平局可能性大',
                odds: { team1: 2.30, draw: 3.10, team2: 3.40 }
            }
        },
        {
            id: 3,
            time: '2026-06-13 03:00',
            team1: { name: '加拿大', flag: '🇨🇦', ranking: 40 },
            team2: { name: '波黑', flag: '🇧🇦', ranking: 65 },
            venue: '多伦多BMO球场',
            group: 'B组',
            analysis: {
                recentForm: {
                    team1: ['负', '平', '负', '平', '负'],
                    team2: ['胜', '负', '平', '胜', '平']
                },
                headToHead: {
                    total: 2,
                    team1Wins: 0,
                    draws: 1,
                    team2Wins: 1,
                    lastMatch: '2023年友谊赛 加拿大 1-1 波黑'
                },
                keyPlayers: {
                    team1: ['阿方索·戴维斯', '大卫', '布坎南'],
                    team2: ['科拉希纳茨', '皮亚尼奇', '哲科']
                },
                prediction: '加拿大主场作战，但波黑经验丰富，预计平局',
                odds: { team1: 2.50, draw: 3.20, team2: 3.00 }
            }
        },
        {
            id: 4,
            time: '2026-06-14 06:00',
            team1: { name: '巴西', flag: '🇧🇷', ranking: 5 },
            team2: { name: '摩洛哥', flag: '🇲🇦', ranking: 13 },
            venue: '福克斯堡吉列体育场',
            group: 'C组',
            analysis: {
                recentForm: {
                    team1: ['胜', '胜', '负', '胜', '胜'],
                    team2: ['胜', '平', '胜', '胜', '平']
                },
                headToHead: {
                    total: 4,
                    team1Wins: 3,
                    draws: 1,
                    team2Wins: 0,
                    lastMatch: '2023年友谊赛 巴西 2-1 摩洛哥'
                },
                keyPlayers: {
                    team1: ['维尼修斯', '罗德里戈', '恩德里克'],
                    team2: ['哈基米', '齐耶赫', '恩内斯里']
                },
                prediction: '焦点之战，巴西进攻更强，但摩洛哥防守稳固',
                odds: { team1: 1.80, draw: 3.50, team2: 4.50 }
            }
        },
        {
            id: 5,
            time: '2026-06-15 04:00',
            team1: { name: '荷兰', flag: '🇳🇱', ranking: 7 },
            team2: { name: '日本', flag: '🇯🇵', ranking: 18 },
            venue: '阿灵顿AT&T体育场',
            group: 'F组',
            analysis: {
                recentForm: {
                    team1: ['胜', '胜', '平', '胜', '负'],
                    team2: ['胜', '负', '胜', '胜', '平']
                },
                headToHead: {
                    total: 3,
                    team1Wins: 2,
                    draws: 0,
                    team2Wins: 1,
                    lastMatch: '2024年友谊赛 荷兰 4-1 日本'
                },
                keyPlayers: {
                    team1: ['范迪克', '德容', '加克波'],
                    team2: ['久保建英', '三笘薫', '远藤航']
                },
                prediction: '荷兰整体实力占优，但日本技术流打法不容小觑',
                odds: { team1: 1.90, draw: 3.40, team2: 4.00 }
            }
        }
    ],
    groupStage: {
        'A组': [
            { team: '墨西哥', played: 2, won: 2, drawn: 0, lost: 0, goalsFor: 3, goalsAgainst: 0, points: 6 },
            { team: '韩国', played: 2, won: 1, drawn: 0, lost: 1, goalsFor: 2, goalsAgainst: 2, points: 3 },
            { team: '捷克', played: 2, won: 0, drawn: 1, lost: 1, goalsFor: 2, goalsAgainst: 3, points: 1 },
            { team: '南非', played: 2, won: 0, drawn: 1, lost: 1, goalsFor: 1, goalsAgainst: 3, points: 1 }
        ],
        'B组': [
            { team: '加拿大', played: 2, won: 1, drawn: 1, lost: 0, goalsFor: 7, goalsAgainst: 1, points: 4 },
            { team: '瑞士', played: 2, won: 1, drawn: 1, lost: 0, goalsFor: 5, goalsAgainst: 2, points: 4 },
            { team: '波黑', played: 2, won: 0, drawn: 1, lost: 1, goalsFor: 2, goalsAgainst: 5, points: 1 },
            { team: '卡塔尔', played: 2, won: 0, drawn: 1, lost: 1, goalsFor: 1, goalsAgainst: 7, points: 1 }
        ],
        'C组': [
            { team: '巴西', played: 2, won: 1, drawn: 1, lost: 0, goalsFor: 4, goalsAgainst: 1, points: 4 },
            { team: '摩洛哥', played: 2, won: 1, drawn: 1, lost: 0, goalsFor: 2, goalsAgainst: 1, points: 4 },
            { team: '苏格兰', played: 2, won: 1, drawn: 0, lost: 1, goalsFor: 1, goalsAgainst: 1, points: 3 },
            { team: '海地', played: 2, won: 0, drawn: 0, lost: 2, goalsFor: 0, goalsAgainst: 4, points: 0 }
        ],
        'D组': [
            { team: '美国', played: 2, won: 2, drawn: 0, lost: 0, goalsFor: 6, goalsAgainst: 1, points: 6 },
            { team: '澳大利亚', played: 2, won: 1, drawn: 0, lost: 1, goalsFor: 2, goalsAgainst: 2, points: 3 },
            { team: '巴拉圭', played: 2, won: 1, drawn: 0, lost: 1, goalsFor: 2, goalsAgainst: 4, points: 3 },
            { team: '土耳其', played: 2, won: 0, drawn: 0, lost: 2, goalsFor: 0, goalsAgainst: 3, points: 0 }
        ],
        'E组': [
            { team: '德国', played: 2, won: 2, drawn: 0, lost: 0, goalsFor: 9, goalsAgainst: 2, points: 6 },
            { team: '科特迪瓦', played: 2, won: 1, drawn: 0, lost: 1, goalsFor: 2, goalsAgainst: 2, points: 3 },
            { team: '厄瓜多尔', played: 2, won: 0, drawn: 1, lost: 1, goalsFor: 0, goalsAgainst: 1, points: 1 },
            { team: '库拉索', played: 2, won: 0, drawn: 1, lost: 1, goalsFor: 1, goalsAgainst: 7, points: 1 }
        ],
        'F组': [
            { team: '荷兰', played: 2, won: 1, drawn: 1, lost: 0, goalsFor: 7, goalsAgainst: 3, points: 4 },
            { team: '日本', played: 2, won: 1, drawn: 1, lost: 0, goalsFor: 6, goalsAgainst: 2, points: 4 },
            { team: '瑞典', played: 2, won: 1, drawn: 0, lost: 1, goalsFor: 6, goalsAgainst: 6, points: 3 },
            { team: '突尼斯', played: 2, won: 0, drawn: 0, lost: 2, goalsFor: 1, goalsAgainst: 9, points: 0 }
        ],
        'G组': [
            { team: '埃及', played: 2, won: 1, drawn: 1, lost: 0, goalsFor: 4, goalsAgainst: 2, points: 4 },
            { team: '伊朗', played: 2, won: 0, drawn: 2, lost: 0, goalsFor: 2, goalsAgainst: 2, points: 2 },
            { team: '比利时', played: 2, won: 0, drawn: 2, lost: 0, goalsFor: 1, goalsAgainst: 1, points: 2 },
            { team: '新西兰', played: 2, won: 0, drawn: 1, lost: 1, goalsFor: 3, goalsAgainst: 5, points: 1 }
        ],
        'H组': [
            { team: '西班牙', played: 2, won: 1, drawn: 1, lost: 0, goalsFor: 4, goalsAgainst: 0, points: 4 },
            { team: '乌拉圭', played: 2, won: 0, drawn: 2, lost: 0, goalsFor: 3, goalsAgainst: 3, points: 2 },
            { team: '佛得角', played: 2, won: 0, drawn: 2, lost: 0, goalsFor: 2, goalsAgainst: 2, points: 2 },
            { team: '沙特阿拉伯', played: 2, won: 0, drawn: 1, lost: 1, goalsFor: 1, goalsAgainst: 5, points: 1 }
        ],
        'I组': [
            { team: '法国', played: 2, won: 2, drawn: 0, lost: 0, goalsFor: 6, goalsAgainst: 1, points: 6 },
            { team: '挪威', played: 2, won: 2, drawn: 0, lost: 0, goalsFor: 7, goalsAgainst: 3, points: 6 },
            { team: '塞内加尔', played: 2, won: 0, drawn: 0, lost: 2, goalsFor: 3, goalsAgainst: 6, points: 0 },
            { team: '伊拉克', played: 2, won: 0, drawn: 0, lost: 2, goalsFor: 1, goalsAgainst: 7, points: 0 }
        ],
        'J组': [
            { team: '阿根廷', played: 2, won: 2, drawn: 0, lost: 0, goalsFor: 5, goalsAgainst: 0, points: 6 },
            { team: '奥地利', played: 2, won: 1, drawn: 0, lost: 1, goalsFor: 3, goalsAgainst: 3, points: 3 },
            { team: '阿尔及利亚', played: 2, won: 1, drawn: 0, lost: 1, goalsFor: 2, goalsAgainst: 4, points: 3 },
            { team: '约旦', played: 2, won: 0, drawn: 0, lost: 2, goalsFor: 2, goalsAgainst: 5, points: 0 }
        ],
        'K组': [
            { team: '葡萄牙', played: 2, won: 1, drawn: 1, lost: 0, goalsFor: 6, goalsAgainst: 1, points: 4 },
            { team: '哥伦比亚', played: 1, won: 1, drawn: 0, lost: 0, goalsFor: 3, goalsAgainst: 1, points: 3 },
            { team: '刚果（金）', played: 1, won: 0, drawn: 1, lost: 0, goalsFor: 1, goalsAgainst: 1, points: 1 },
            { team: '乌兹别克斯坦', played: 2, won: 0, drawn: 0, lost: 2, goalsFor: 1, goalsAgainst: 8, points: 0 }
        ],
        'L组': [
            { team: '英格兰', played: 2, won: 1, drawn: 1, lost: 0, goalsFor: 4, goalsAgainst: 2, points: 4 },
            { team: '加纳', played: 2, won: 1, drawn: 1, lost: 0, goalsFor: 1, goalsAgainst: 0, points: 4 },
            { team: '克罗地亚', played: 2, won: 1, drawn: 0, lost: 1, goalsFor: 3, goalsAgainst: 4, points: 3 },
            { team: '巴拿马', played: 2, won: 0, drawn: 0, lost: 2, goalsFor: 0, goalsAgainst: 2, points: 0 }
        ]
    },
    historicalMatches: [
        { year: 2022, round: '决赛', team1: '阿根廷', team2: '法国', score: '4-2 (点球 3-3)' },
        { year: 2022, round: '半决赛', team1: '阿根廷', team2: '克罗地亚', score: '3-0' },
        { year: 2022, round: '半决赛', team1: '法国', team2: '摩洛哥', score: '2-0' },
        { year: 2018, round: '决赛', team1: '法国', team2: '克罗地亚', score: '4-2' },
        { year: 2018, round: '半决赛', team1: '法国', team2: '比利时', score: '1-0' },
        { year: 2018, round: '半决赛', team1: '克罗地亚', team2: '英格兰', score: '2-1 (加时)' },
        { year: 2014, round: '决赛', team1: '德国', team2: '阿根廷', score: '1-0 (加时)' },
        { year: 2014, round: '半决赛', team1: '德国', team2: '巴西', score: '7-1' },
        { year: 2014, round: '半决赛', team1: '阿根廷', team2: '荷兰', score: '0-0 (点球 4-2)' },
        { year: 2010, round: '决赛', team1: '西班牙', team2: '荷兰', score: '1-0 (加时)' },
        { year: 2010, round: '半决赛', team1: '西班牙', team2: '德国', score: '1-0' },
        { year: 2010, round: '半决赛', team1: '荷兰', team2: '乌拉圭', score: '3-2' },
        { year: 2006, round: '决赛', team1: '意大利', team2: '法国', score: '1-1 (点球 5-3)' },
        { year: 2006, round: '半决赛', team1: '意大利', team2: '德国', score: '2-0 (加时)' },
        { year: 2006, round: '半决赛', team1: '法国', team2: '巴西', score: '1-0' },
        { year: 2002, round: '决赛', team1: '巴西', team2: '德国', score: '2-0' },
        { year: 2002, round: '半决赛', team1: '巴西', team2: '土耳其', score: '1-0' },
        { year: 2002, round: '半决赛', team1: '德国', team2: '韩国', score: '1-0' }
    ],
    worldCup2026: {
        host: '美国、加拿大、墨西哥',
        time: '2026年6月11日 - 7月19日',
        teams: 48,
        matches: 104,
        groups: {
            'A组': ['墨西哥', '南非', '韩国', '捷克'],
            'B组': ['加拿大', '波黑', '卡塔尔', '瑞士'],
            'C组': ['巴西', '摩洛哥', '海地', '苏格兰'],
            'D组': ['美国', '巴拉圭', '澳大利亚', '土耳其'],
            'E组': ['德国', '库拉索', '科特迪瓦', '厄瓜多尔'],
            'F组': ['荷兰', '日本', '瑞典', '突尼斯'],
            'G组': ['比利时', '埃及', '伊朗', '新西兰'],
            'H组': ['西班牙', '佛得角', '沙特阿拉伯', '乌拉圭'],
            'I组': ['法国', '塞内加尔', '伊拉克', '挪威'],
            'J组': ['阿根廷', '阿尔及利亚', '奥地利', '约旦'],
            'K组': ['葡萄牙', '刚果（金）', '乌兹别克斯坦', '哥伦比亚'],
            'L组': ['英格兰', '克罗地亚', '加纳', '巴拿马']
        },
        keyMatches: [
            { date: '6月11日', match: '墨西哥 vs 南非', venue: '墨西哥城阿兹特克体育场', note: '揭幕战' },
            { date: '6月12日', match: '韩国 vs 捷克', venue: '萨波潘阿克伦体育场' },
            { date: '6月13日', match: '加拿大 vs 波黑', venue: '多伦多BMO球场' },
            { date: '6月14日', match: '巴西 vs 摩洛哥', venue: '福克斯堡吉列体育场' },
            { date: '6月14日', match: '荷兰 vs 日本', venue: '阿灵顿AT&T体育场' },
            { date: '6月15日', match: '德国 vs 库拉索', venue: '费城林肯金融体育场' },
            { date: '6月16日', match: '西班牙 vs 佛得角', venue: '纽约大都会人寿体育场' },
            { date: '6月17日', match: '法国 vs 塞内加尔', venue: '纽约大都会人寿体育场' },
            { date: '6月17日', match: '阿根廷 vs 阿尔及利亚', venue: '纽约大都会人寿体育场' },
            { date: '7月19日', match: '决赛', venue: '纽约大都会人寿体育场', note: '决赛' }
        ]
    }
};

// 显示小组积分榜
function showGroupStandings() {
    const container = document.getElementById('group-standings');
    container.innerHTML = '';
    
    for (const [groupName, teams] of Object.entries(worldCupData.groupStage)) {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'group-container';
        
        const title = document.createElement('h3');
        title.className = 'group-title';
        title.textContent = groupName;
        groupDiv.appendChild(title);
        
        const table = document.createElement('table');
        table.innerHTML = `
            <thead>
                <tr>
                    <th>球队</th>
                    <th>场次</th>
                    <th>胜</th>
                    <th>平</th>
                    <th>负</th>
                    <th>进球</th>
                    <th>失球</th>
                    <th>净胜球</th>
                    <th>积分</th>
                </tr>
            </thead>
            <tbody>
                ${teams.map(team => `
                    <tr>
                        <td>${team.team}</td>
                        <td>${team.played}</td>
                        <td>${team.won}</td>
                        <td>${team.drawn}</td>
                        <td>${team.lost}</td>
                        <td>${team.goalsFor}</td>
                        <td>${team.goalsAgainst}</td>
                        <td>${team.goalsFor - team.goalsAgainst}</td>
                        <td>${team.points}</td>
                    </tr>
                `).join('')}
            </tbody>
        `;
        
        groupDiv.appendChild(table);
        container.appendChild(groupDiv);
    }
}

// 显示历届比分
function showHistoricalScores() {
    const container = document.getElementById('historical-scores');
    container.innerHTML = '';
    
    // 按年份分组
    const matchesByYear = {};
    worldCupData.historicalMatches.forEach(match => {
        if (!matchesByYear[match.year]) {
            matchesByYear[match.year] = [];
        }
        matchesByYear[match.year].push(match);
    });
    
    // 按年份降序排列
    const years = Object.keys(matchesByYear).sort((a, b) => b - a);
    
    years.forEach(year => {
        const yearDiv = document.createElement('div');
        yearDiv.className = 'historical-item';
        
        const yearTitle = document.createElement('h3');
        yearTitle.textContent = `${year}年世界杯`;
        yearDiv.appendChild(yearTitle);
        
        const matchesList = document.createElement('ul');
        matchesByYear[year].forEach(match => {
            const matchItem = document.createElement('li');
            matchItem.innerHTML = `
                <strong>${match.round}:</strong> ${match.team1} vs ${match.team2} 
                <span class="score">${match.score}</span>
            `;
            matchesList.appendChild(matchItem);
        });
        
        yearDiv.appendChild(matchesList);
        container.appendChild(yearDiv);
    });
}

// 显示今日比赛对战分析
function showTodayMatches() {
    const container = document.getElementById('today-matches');
    container.innerHTML = '';
    
    const today = new Date().toISOString().split('T')[0];
    const todayMatches = worldCupData.todayMatches;
    
    if (todayMatches.length === 0) {
        container.innerHTML = '<div class="no-matches">今日暂无比赛</div>';
        return;
    }
    
    // 添加日期筛选
    const dateHeader = document.createElement('div');
    dateHeader.className = 'date-header';
    dateHeader.innerHTML = `
        <h3>2026年6月12日 - 今日比赛</h3>
        <div class="date-info">
            <span>共 ${todayMatches.length} 场比赛</span>
            <button onclick="refreshMatches()">刷新数据</button>
        </div>
    `;
    container.appendChild(dateHeader);
    
    // 显示每场比赛
    todayMatches.forEach(match => {
        const matchCard = document.createElement('div');
        matchCard.className = 'match-card';
        
        // 比赛头部信息
        const matchHeader = document.createElement('div');
        matchHeader.className = 'match-header';
        matchHeader.innerHTML = `
            <div class="match-meta">
                <span class="match-time">${match.time}</span>
                <span class="match-group">${match.group}</span>
            </div>
            <div class="match-venue">${match.venue}</div>
        `;
        matchCard.appendChild(matchHeader);
        
        // 对阵双方
        const teamsSection = document.createElement('div');
        teamsSection.className = 'teams-section';
        teamsSection.innerHTML = `
            <div class="team team1">
                <div class="team-flag">${match.team1.flag}</div>
                <div class="team-name">${match.team1.name}</div>
                <div class="team-ranking">FIFA排名 ${match.team1.ranking}</div>
            </div>
            <div class="vs">
                <span>VS</span>
            </div>
            <div class="team team2">
                <div class="team-flag">${match.team2.flag}</div>
                <div class="team-name">${match.team2.name}</div>
                <div class="team-ranking">FIFA排名 ${match.team2.ranking}</div>
            </div>
        `;
        matchCard.appendChild(teamsSection);
        
        // 分析数据
        const analysis = match.analysis;
        const analysisSection = document.createElement('div');
        analysisSection.className = 'analysis-section';
        
        // 近期状态
        const recentFormHTML = `
            <div class="analysis-item">
                <h4>近期状态</h4>
                <div class="form-container">
                    <div class="form-team">
                        <span class="team-label">${match.team1.name}</span>
                        <div class="form-badges">
                            ${analysis.recentForm.team1.map(result => 
                                `<span class="form-badge ${result === '胜' ? 'win' : result === '平' ? 'draw' : 'loss'}">${result}</span>`
                            ).join('')}
                        </div>
                    </div>
                    <div class="form-team">
                        <span class="team-label">${match.team2.name}</span>
                        <div class="form-badges">
                            ${analysis.recentForm.team2.map(result => 
                                `<span class="form-badge ${result === '胜' ? 'win' : result === '平' ? 'draw' : 'loss'}">${result}</span>`
                            ).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // 历史交锋
        const h2h = analysis.headToHead;
        const headToHeadHTML = `
            <div class="analysis-item">
                <h4>历史交锋</h4>
                <div class="h2h-stats">
                    <div class="h2h-item">
                        <span class="h2h-number">${h2h.total}</span>
                        <span class="h2h-label">总场次</span>
                    </div>
                    <div class="h2h-item team1-color">
                        <span class="h2h-number">${h2h.team1Wins}</span>
                        <span class="h2h-label">${match.team1.name}胜</span>
                    </div>
                    <div class="h2h-item draw-color">
                        <span class="h2h-number">${h2h.draws}</span>
                        <span class="h2h-label">平局</span>
                    </div>
                    <div class="h2h-item team2-color">
                        <span class="h2h-number">${h2h.team2Wins}</span>
                        <span class="h2h-label">${match.team2.name}胜</span>
                    </div>
                </div>
                <div class="last-match">最近交锋: ${h2h.lastMatch}</div>
            </div>
        `;
        
        // 关键球员
        const keyPlayersHTML = `
            <div class="analysis-item">
                <h4>关键球员</h4>
                <div class="players-container">
                    <div class="players-team">
                        <span class="team-label">${match.team1.name}</span>
                        <div class="players-list">
                            ${analysis.keyPlayers.team1.map(player => 
                                `<span class="player-badge">${player}</span>`
                            ).join('')}
                        </div>
                    </div>
                    <div class="players-team">
                        <span class="team-label">${match.team2.name}</span>
                        <div class="players-list">
                            ${analysis.keyPlayers.team2.map(player => 
                                `<span class="player-badge">${player}</span>`
                            ).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // 赔率和预测
        const odds = analysis.odds;
        const predictionHTML = `
            <div class="analysis-item prediction">
                <h4>分析预测</h4>
                <div class="prediction-content">
                    <p>${analysis.prediction}</p>
                    <div class="odds-container">
                        <div class="odds-item">
                            <span class="odds-label">${match.team1.name}胜</span>
                            <span class="odds-value">${odds.team1}</span>
                        </div>
                        <div class="odds-item">
                            <span class="odds-label">平局</span>
                            <span class="odds-value">${odds.draw}</span>
                        </div>
                        <div class="odds-item">
                            <span class="odds-label">${match.team2.name}胜</span>
                            <span class="odds-value">${odds.team2}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        analysisSection.innerHTML = recentFormHTML + headToHeadHTML + keyPlayersHTML + predictionHTML;
        matchCard.appendChild(analysisSection);
        
        // 添加到容器
        container.appendChild(matchCard);
    });
}

// 刷新比赛数据
function refreshMatches() {
    showTodayMatches();
}

// 切换显示区域
function showSection(sectionId) {
    // 隐藏所有区域
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
    });
    
    // 显示选中的区域
    document.getElementById(sectionId).classList.add('active');
    
    // 根据区域加载数据
    if (sectionId === 'today') {
        showTodayMatches();
    } else if (sectionId === 'group') {
        showGroupStandings();
    } else if (sectionId === 'historical') {
        showHistoricalScores();
    } else if (sectionId === 'worldcup2026') {
        showWorldCup2026();
    }
}

// 显示2026年世界杯信息
function showWorldCup2026() {
    const container = document.getElementById('worldcup2026-info');
    container.innerHTML = '';
    
    const wc2026 = worldCupData.worldCup2026;
    
    // 赛事概览
    const overviewDiv = document.createElement('div');
    overviewDiv.className = 'overview-section';
    overviewDiv.innerHTML = `
        <h3>赛事概览</h3>
        <div class="info-grid">
            <div class="info-item">
                <strong>举办国家:</strong>
                <span>${wc2026.host}</span>
            </div>
            <div class="info-item">
                <strong>比赛时间:</strong>
                <span>${wc2026.time}</span>
            </div>
            <div class="info-item">
                <strong>参赛球队:</strong>
                <span>${wc2026.teams} 支</span>
            </div>
            <div class="info-item">
                <strong>总比赛场次:</strong>
                <span>${wc2026.matches} 场</span>
            </div>
            <div class="info-item">
                <strong>揭幕战:</strong>
                <span>2026年6月11日 墨西哥城阿兹特克体育场</span>
            </div>
            <div class="info-item">
                <strong>决赛:</strong>
                <span>2026年7月19日 纽约大都会人寿体育场</span>
            </div>
        </div>
    `;
    container.appendChild(overviewDiv);
    
    // 分组情况
    const groupsDiv = document.createElement('div');
    groupsDiv.className = 'groups-section';
    groupsDiv.innerHTML = '<h3>48强分组</h3>';
    
    const groupsGrid = document.createElement('div');
    groupsGrid.className = 'groups-grid';
    
    for (const [groupName, teams] of Object.entries(wc2026.groups)) {
        const groupCard = document.createElement('div');
        groupCard.className = 'group-card';
        groupCard.innerHTML = `
            <h4>${groupName}</h4>
            <ul>
                ${teams.map(team => `<li>${team}</li>`).join('')}
            </ul>
        `;
        groupsGrid.appendChild(groupCard);
    }
    
    groupsDiv.appendChild(groupsGrid);
    container.appendChild(groupsDiv);
    
    // 重点赛程
    const matchesDiv = document.createElement('div');
    matchesDiv.className = 'matches-section';
    matchesDiv.innerHTML = '<h3>重点赛程</h3>';
    
    const matchesTable = document.createElement('table');
    matchesTable.className = 'matches-table';
    matchesTable.innerHTML = `
        <thead>
            <tr>
                <th>日期</th>
                <th>对阵</th>
                <th>比赛场地</th>
                <th>备注</th>
            </tr>
        </thead>
        <tbody>
            ${wc2026.keyMatches.map(match => `
                <tr ${match.note ? 'class="highlight"' : ''}>
                    <td>${match.date}</td>
                    <td><strong>${match.match}</strong></td>
                    <td>${match.venue}</td>
                    <td>${match.note || '-'}</td>
                </tr>
            `).join('')}
        </tbody>
    `;
    
    matchesDiv.appendChild(matchesTable);
    container.appendChild(matchesDiv);
    
    // 赛制说明
    const rulesDiv = document.createElement('div');
    rulesDiv.className = 'rules-section';
    rulesDiv.innerHTML = `
        <h3>赛制说明</h3>
        <div class="rules-content">
            <ul>
                <li><strong>小组赛:</strong> 48支球队分为12个小组，每组4支球队进行单循环赛</li>
                <li><strong>晋级规则:</strong> 每个小组前两名（24队）+ 8个成绩最好的小组第三名，共32队晋级淘汰赛</li>
                <li><strong>淘汰赛:</strong> 新增1/16决赛，从32强开始单场淘汰</li>
                <li><strong>比赛时间:</strong> 90分钟平局则进入30分钟加时赛，仍平则点球大战</li>
                <li><strong>冠军场次:</strong> 夺冠球队需踢8场比赛（3场小组赛 + 5场淘汰赛）</li>
            </ul>
        </div>
    `;
    container.appendChild(rulesDiv);
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', function() {
    showGroupStandings();
});