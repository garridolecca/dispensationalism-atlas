export const eras = [
  { id: 1, name: "Early Roots", shortName: "Early Roots", dateRange: "1800–1840", color: [201,168,76], hexColor: "#C9A84C", description: "John Nelson Darby, a Church of Ireland clergyman, develops dispensational theology while recovering from a riding accident. The Plymouth Brethren movement coalesces in Dublin and Plymouth, and prophetic conferences at Powerscourt House explore futurist eschatology.", keyTheme: "Dispensational origins" },
  { id: 2, name: "Spread & Systematization", shortName: "Systematization", dateRange: "1840–1909", color: [138,79,125], hexColor: "#8A4F7D", description: "Darby makes seven trips to North America, planting Brethren assemblies and spreading dispensational premillennialism. The Niagara Bible Conference and Northfield conferences popularize the system. C.I. Scofield begins work on his reference Bible.", keyTheme: "Transatlantic expansion" },
  { id: 3, name: "Classical Dispensationalism", shortName: "Classical", dateRange: "1909–1965", color: [86,130,89], hexColor: "#568259", description: "The Scofield Reference Bible (1909) puts dispensational notes in millions of hands. Lewis Sperry Chafer founds Dallas Theological Seminary (1924), institutionalizing the system. Dispensationalism becomes the dominant eschatology in American fundamentalism.", keyTheme: "Institutional establishment" },
  { id: 4, name: "Revised & Progressive", shortName: "Progressive", dateRange: "1965–Present", color: [163,75,75], hexColor: "#A34B4B", description: "Charles Ryrie's 'Dispensationalism Today' (1965) defends and refines the system. Craig Blaising and Darrell Bock develop 'progressive dispensationalism', seeking continuity between dispensations while maintaining distinction between Israel and the Church.", keyTheme: "Theological refinement" },
];

export const eraIndex = {};
eras.forEach(e => { eraIndex[e.id] = e; });

export const locations = [
  { id: "dublin", name: "Dublin", modernName: "Dublin, Ireland", region: "Ireland", lat: 53.349, lng: -6.260, significance: "major", eras: [1], events: [
    { era: 1, order: 1, year: 1825, title: "Darby Ordained in Dublin", description: "John Nelson Darby is ordained as a deacon in the Church of Ireland. Initially a zealous parish minister in County Wicklow, a riding accident confines him to bed where intensive Bible study leads him to develop his distinctive dispensational framework.", figure: "John Nelson Darby" },
  ]},
  { id: "powerscourt", name: "Powerscourt House", modernName: "Enniskerry, Co. Wicklow", region: "Ireland", lat: 53.185, lng: -6.188, significance: "major", eras: [1], events: [
    { era: 1, order: 2, year: 1831, title: "Powerscourt Prophetic Conferences", description: "Lady Powerscourt hosts a series of prophetic conferences (1831-33) at her estate near Dublin. Darby, along with other early Brethren, develop futurist eschatology including the pre-tribulation rapture. These conferences become the intellectual seedbed of dispensationalism.", figure: "John Nelson Darby" },
  ]},
  { id: "plymouth", name: "Plymouth", modernName: "Plymouth, Devon", region: "England", lat: 50.376, lng: -4.143, significance: "major", eras: [1], events: [
    { era: 1, order: 3, year: 1831, title: "Plymouth Brethren Assembly", description: "A Brethren assembly gathers at Providence Chapel in Plymouth, growing to over 1,000 members. The group becomes so identified with this city that the wider movement is called 'Plymouth Brethren', though Darby dislikes the label.", figure: "John Nelson Darby" },
  ]},
  { id: "london", name: "London", modernName: "London, England", region: "England", lat: 51.507, lng: -0.128, significance: "major", eras: [1, 2], events: [
    { era: 1, order: 4, year: 1832, title: "Brethren Meetings in London", description: "Early Brethren begin meeting in London, eventually establishing assemblies across the city. London becomes a key center for Brethren publishing and conferences.", figure: null },
  ]},
  { id: "bristol", name: "Bristol", modernName: "Bristol, England", region: "England", lat: 51.455, lng: -2.588, significance: "major", eras: [1], events: [
    { era: 1, order: 5, year: 1836, title: "George Müller's Orphanages", description: "George Müller establishes his orphan houses in Bristol, relying solely on prayer and faith for provision. His work becomes the most famous practical demonstration of Brethren principles and inspires the faith mission movement worldwide.", figure: "George Müller" },
  ]},
  { id: "lausanne", name: "Lausanne", modernName: "Lausanne, Switzerland", region: "Switzerland", lat: 46.520, lng: 6.634, significance: "moderate", eras: [1], events: [
    { era: 1, order: 6, year: 1840, title: "Darby's Continental Ministry", description: "Darby establishes a base in Lausanne and develops French-speaking Brethren assemblies across Switzerland and France. He produces a French Bible translation and prolific theological writings.", figure: "John Nelson Darby" },
  ]},
  { id: "elberfeld", name: "Elberfeld", modernName: "Wuppertal, Germany", region: "Germany", lat: 51.256, lng: 7.148, significance: "moderate", eras: [2], events: [
    { era: 2, order: 1, year: 1855, title: "Elberfeld Bible Translation", description: "German Brethren in Elberfeld produce the 'Elberfelder Bibel', a highly literal German Bible translation influenced by Darby's translation principles. It becomes the standard Bible for German-speaking Brethren assemblies.", figure: null },
  ]},
  { id: "new-york", name: "New York City", modernName: "New York, NY", region: "United States", lat: 40.713, lng: -74.006, significance: "major", eras: [2], events: [
    { era: 2, order: 2, year: 1862, title: "Darby's First American Tour", description: "Darby makes his first visit to North America, preaching in New York and other cities. Over seven trips (1862-1877), he establishes Brethren assemblies and wins influential converts including James Brookes and D.L. Moody's circle.", figure: "John Nelson Darby" },
  ]},
  { id: "st-louis", name: "St. Louis", modernName: "St. Louis, MO", region: "United States", lat: 38.627, lng: -90.199, significance: "moderate", eras: [2], events: [
    { era: 2, order: 3, year: 1870, title: "James Brookes and Bible Study", description: "James Brookes, pastor of Walnut Street Presbyterian Church, becomes the leading American advocate of dispensational premillennialism. His Bible classes and journal 'The Truth' spread Darby's ideas across denominational lines.", figure: "James Brookes" },
  ]},
  { id: "niagara", name: "Niagara-on-the-Lake", modernName: "Niagara-on-the-Lake, Ontario", region: "Canada", lat: 43.255, lng: -79.071, significance: "major", eras: [2], events: [
    { era: 2, order: 4, year: 1883, title: "Niagara Bible Conference", description: "The Niagara Bible Conference (1883-1897), organized by James Brookes, becomes the premier dispensational gathering in North America. It produces a 14-point creed affirming premillennialism and verbal inspiration, and brings together leaders who will shape American fundamentalism.", figure: "James Brookes" },
  ]},
  { id: "chicago", name: "Chicago", modernName: "Chicago, IL", region: "United States", lat: 41.879, lng: -87.624, significance: "major", eras: [2, 3], events: [
    { era: 2, order: 5, year: 1886, title: "Moody Bible Institute Founded", description: "D.L. Moody founds the Chicago Evangelization Society (later Moody Bible Institute). Though Moody is not a strict dispensationalist, the institute becomes a major center for dispensational teaching, especially under later leaders like James M. Gray.", figure: "Dwight L. Moody" },
  ]},
  { id: "east-northfield", name: "East Northfield", modernName: "Northfield, MA", region: "United States", lat: 42.668, lng: -72.452, significance: "moderate", eras: [2], events: [
    { era: 2, order: 6, year: 1880, title: "Northfield Conferences", description: "D.L. Moody hosts summer conferences at his hometown of Northfield, Massachusetts. These gatherings bring together dispensational teachers and spread premillennial ideas among a broad evangelical audience.", figure: "Dwight L. Moody" },
  ]},
  { id: "philadelphia", name: "Philadelphia", modernName: "Philadelphia, PA", region: "United States", lat: 39.952, lng: -75.164, significance: "moderate", eras: [2], events: [
    { era: 2, order: 7, year: 1895, title: "Scofield Pastors in Philadelphia", description: "C.I. Scofield, after pastorates in Dallas and elsewhere, settles in the Northeast and begins work on his reference Bible. His correspondence course on the Bible, organized along dispensational lines, reaches thousands.", figure: "C.I. Scofield" },
  ]},
  { id: "oxford", name: "Oxford", modernName: "Oxford, England", region: "England", lat: 51.752, lng: -1.258, significance: "major", eras: [3], events: [
    { era: 3, order: 1, year: 1909, title: "Scofield Reference Bible Published", description: "Oxford University Press publishes the Scofield Reference Bible, placing dispensational notes alongside the King James text. It becomes one of the best-selling study Bibles in history, putting dispensational interpretation directly into millions of readers' hands.", figure: "C.I. Scofield" },
  ]},
  { id: "dallas", name: "Dallas", modernName: "Dallas, TX", region: "United States", lat: 32.780, lng: -96.797, significance: "major", eras: [3, 4], events: [
    { era: 3, order: 2, year: 1924, title: "Dallas Theological Seminary Founded", description: "Lewis Sperry Chafer founds the Evangelical Theological College (renamed Dallas Theological Seminary in 1936). DTS becomes the institutional headquarters of dispensationalism, requiring all faculty to affirm premillennial dispensationalism.", figure: "Lewis Sperry Chafer" },
    { era: 4, order: 1, year: 1986, title: "Progressive Dispensationalism Emerges", description: "Craig Blaising and Darrell Bock, professors at DTS, begin developing 'progressive dispensationalism', arguing for more continuity between dispensations while maintaining the Israel-Church distinction. Their work sparks a new phase of dispensational theology.", figure: "Craig Blaising" },
  ]},
  { id: "wheaton", name: "Wheaton", modernName: "Wheaton, IL", region: "United States", lat: 41.866, lng: -88.107, significance: "moderate", eras: [3], events: [
    { era: 3, order: 3, year: 1930, title: "Wheaton College and Dispensationalism", description: "Wheaton College, under presidents J. Oliver Buswell and V. Raymond Edman, becomes a center of evangelical scholarship sympathetic to dispensational theology, training thousands of pastors and missionaries.", figure: null },
  ]},
  { id: "grand-rapids", name: "Grand Rapids", modernName: "Grand Rapids, MI", region: "United States", lat: 42.963, lng: -85.668, significance: "moderate", eras: [3], events: [
    { era: 3, order: 4, year: 1940, title: "Publishing Center", description: "Grand Rapids becomes a major center for evangelical publishing. Zondervan, Eerdmans, and Baker publish dispensational works that reach a mass audience. The Ryrie Study Bible and Walvoord commentaries are published here.", figure: null },
  ]},
  { id: "los-angeles", name: "Los Angeles", modernName: "Los Angeles, CA", region: "United States", lat: 34.052, lng: -118.244, significance: "moderate", eras: [3], events: [
    { era: 3, order: 5, year: 1908, title: "Bible Institute of Los Angeles", description: "The Bible Institute of Los Angeles (Biola) is founded with strong dispensational commitments. It becomes one of the largest Bible institutes in the West, training pastors in dispensational theology.", figure: null },
  ]},
  { id: "kansas-city", name: "Kansas City", modernName: "Kansas City, MO", region: "United States", lat: 39.100, lng: -94.579, significance: "moderate", eras: [3], events: [
    { era: 3, order: 6, year: 1950, title: "Conferences and Expansion", description: "Kansas City hosts major Bible conferences that spread dispensational teaching across the Midwest. The city becomes an important center for dispensational missions organizations.", figure: null },
  ]},
  { id: "toronto", name: "Toronto", modernName: "Toronto, Ontario", region: "Canada", lat: 43.653, lng: -79.383, significance: "moderate", eras: [2], events: [
    { era: 2, order: 8, year: 1870, title: "Canadian Brethren Assemblies", description: "Brethren assemblies spread across Canada, with Toronto becoming a major center. Canadian Brethren maintain close ties with British assemblies while also connecting with the American dispensational network.", figure: null },
  ]},
  { id: "baghdad", name: "Baghdad", modernName: "Baghdad, Iraq", region: "Middle East", lat: 33.313, lng: 44.366, significance: "moderate", eras: [2], events: [
    { era: 2, order: 9, year: 1860, title: "Brethren Missions in the Middle East", description: "Brethren missionaries establish work in Baghdad and across the Ottoman Empire, motivated by dispensational interest in biblical lands and the prophetic significance of the Middle East.", figure: null },
  ]},
  { id: "boston", name: "Boston", modernName: "Boston, MA", region: "United States", lat: 42.361, lng: -71.058, significance: "moderate", eras: [2], events: [
    { era: 2, order: 10, year: 1875, title: "Darby's Boston Meetings", description: "Darby holds influential meetings in Boston during his American tours, winning converts among educated New Englanders. The Brethren movement takes root in the Northeast.", figure: "John Nelson Darby" },
  ]},
  { id: "denver", name: "Denver", modernName: "Denver, CO", region: "United States", lat: 39.739, lng: -104.990, significance: "moderate", eras: [3], events: [
    { era: 3, order: 7, year: 1945, title: "Western Expansion", description: "Dispensational churches and Bible schools expand across the western United States, with Denver serving as a key center for conferences and training.", figure: null },
  ]},
  { id: "atlanta", name: "Atlanta", modernName: "Atlanta, GA", region: "United States", lat: 33.749, lng: -84.388, significance: "moderate", eras: [3], events: [
    { era: 3, order: 8, year: 1955, title: "Southern Growth", description: "Dispensational theology spreads throughout the American South, finding a receptive audience in Southern Baptist and independent Baptist churches.", figure: null },
  ]},
  { id: "portland", name: "Portland", modernName: "Portland, OR", region: "United States", lat: 45.515, lng: -122.680, significance: "moderate", eras: [4], events: [
    { era: 4, order: 2, year: 1970, title: "Western Seminary", description: "Western Seminary in Portland becomes an important center for dispensational education on the West Coast, training pastors who serve across the Pacific Northwest.", figure: null },
  ]},
  { id: "richmond", name: "Richmond", modernName: "Richmond, VA", region: "United States", lat: 37.541, lng: -77.436, significance: "moderate", eras: [3], events: [
    { era: 3, order: 9, year: 1960, title: "Southern Conferences", description: "Richmond hosts Bible prophecy conferences that attract thousands. The dispensational movement becomes deeply embedded in Southern evangelical culture.", figure: null },
  ]},
  { id: "san-antonio", name: "San Antonio", modernName: "San Antonio, TX", region: "United States", lat: 29.425, lng: -98.495, significance: "moderate", eras: [3], events: [
    { era: 3, order: 10, year: 1920, title: "Chafer's Early Ministry", description: "Lewis Sperry Chafer conducts evangelistic work in Texas before founding Dallas Theological Seminary. His experience in frontier evangelism shapes his practical approach to dispensational theology.", figure: "Lewis Sperry Chafer" },
  ]},
  { id: "geneva", name: "Geneva", modernName: "Geneva, Switzerland", region: "Switzerland", lat: 46.204, lng: 6.144, significance: "moderate", eras: [1], events: [
    { era: 1, order: 7, year: 1837, title: "Darby's French-Speaking Ministry", description: "Darby establishes Brethren assemblies in French-speaking Switzerland. His French translation of the Bible and theological writings in French extend dispensational ideas across the francophone world.", figure: "John Nelson Darby" },
  ]},
  { id: "swanwick", name: "Swanwick", modernName: "Swanwick, Derbyshire", region: "England", lat: 53.078, lng: -1.417, significance: "moderate", eras: [2], events: [
    { era: 2, order: 11, year: 1890, title: "British Bible Conferences", description: "Swanwick and other English conference centers host prophetic and Bible study conferences that maintain the dispensational tradition in Britain alongside its American expansion.", figure: null },
  ]},
];

export const routes = [
  { era: 1, path: [[-6.260, 53.349], [-6.188, 53.185], [-4.143, 50.376], [-0.128, 51.507], [-2.588, 51.455]] },
  { era: 1, path: [[-0.128, 51.507], [6.634, 46.520], [6.144, 46.204]] },
  { era: 2, path: [[-0.128, 51.507], [-74.006, 40.713], [-90.199, 38.627], [-87.624, 41.879]] },
  { era: 2, path: [[-74.006, 40.713], [-79.071, 43.255], [-72.452, 42.668], [-71.058, 42.361]] },
  { era: 2, path: [[7.148, 51.256], [44.366, 33.313]] },
  { era: 3, path: [[-1.258, 51.752], [-96.797, 32.780], [-88.107, 41.866], [-87.624, 41.879]] },
  { era: 3, path: [[-96.797, 32.780], [-85.668, 42.963], [-118.244, 34.052]] },
  { era: 4, path: [[-96.797, 32.780], [-122.680, 45.515]] },
];

export const figures = [
  { id: "darby", name: "John Nelson Darby", years: "1800–1882", role: "Father of Dispensationalism", bio: "Church of Ireland clergyman who developed the dispensational framework, including the pre-tribulation rapture. Made seven trips to America and produced Bible translations in English, French, and German." },
  { id: "irving", name: "Edward Irving", years: "1792–1834", role: "Prophetic Movement Pioneer", bio: "Scottish minister whose prophetic movement in London explored futurist eschatology. Though his ideas differed from Darby's, he contributed to the milieu in which dispensationalism developed." },
  { id: "scofield", name: "C.I. Scofield", years: "1843–1921", role: "Scofield Reference Bible Author", bio: "Civil War veteran, lawyer, and pastor who produced the Scofield Reference Bible (1909), the single most influential vehicle for spreading dispensational theology." },
  { id: "chafer", name: "Lewis Sperry Chafer", years: "1871–1952", role: "Founder of Dallas Theological Seminary", bio: "Evangelist and theologian who founded DTS in 1924 and wrote the 8-volume 'Systematic Theology', the first comprehensive systematic theology written from a dispensational perspective." },
  { id: "walvoord", name: "John Walvoord", years: "1910–2002", role: "DTS President & Prophecy Scholar", bio: "Served as president of Dallas Theological Seminary for 34 years (1952-1986). His books on prophecy sold millions and made him the most prominent dispensational voice of the late 20th century." },
  { id: "ryrie", name: "Charles Ryrie", years: "1925–2016", role: "Dispensationalism Defined", bio: "DTS professor whose 'Dispensationalism Today' (1965) provided the classic defense of the system. His Ryrie Study Bible brought dispensational notes to a new generation." },
  { id: "moody", name: "Dwight L. Moody", years: "1837–1899", role: "Evangelist & Educator", bio: "The most famous evangelist of the 19th century. Though not a strict dispensationalist, his platform and institutions (Moody Bible Institute, Northfield conferences) spread dispensational ideas." },
  { id: "muller", name: "George Müller", years: "1805–1898", role: "Bristol Orphanages & Brethren Leader", bio: "Prussian-born Brethren leader famous for his Bristol orphanages, supported entirely by prayer. His life of faith inspired millions and demonstrated Brethren principles in practice." },
  { id: "brookes", name: "James Brookes", years: "1830–1897", role: "Niagara Bible Conference Organizer", bio: "Presbyterian pastor in St. Louis who organized the Niagara Bible Conference and became the leading American proponent of dispensational premillennialism before Scofield." },
  { id: "blackstone", name: "William Blackstone", years: "1841–1935", role: "'Jesus Is Coming' Author", bio: "Businessman and evangelist whose book 'Jesus Is Coming' (1878) sold millions and popularized premillennial dispensationalism. Also an early Christian Zionist who petitioned for a Jewish homeland." },
  { id: "gaebelein", name: "Arno C. Gaebelein", years: "1861–1945", role: "Scofield Consulting Editor", bio: "German-born Bible teacher and editor of 'Our Hope' magazine. Served as a consulting editor for the Scofield Reference Bible, contributing especially on prophetic passages." },
  { id: "ironside", name: "Harry Ironside", years: "1876–1951", role: "Moody Church Pastor", bio: "Self-taught Brethren preacher who served as pastor of Moody Memorial Church in Chicago (1930-1948). His accessible commentaries and sermons popularized dispensational teaching." },
  { id: "blaising", name: "Craig Blaising", years: "1949–", role: "Progressive Dispensationalist", bio: "DTS and Southwestern Seminary professor who, with Darrell Bock, developed progressive dispensationalism, arguing for more continuity between dispensations." },
  { id: "bock", name: "Darrell Bock", years: "1953–", role: "Progressive Dispensationalist", bio: "DTS research professor and prolific author who co-developed progressive dispensationalism with Craig Blaising. His Luke-Acts scholarship bridges dispensational and mainstream evangelical scholarship." },
  { id: "mcclain", name: "Alva J. McClain", years: "1888–1968", role: "Grace Theological Seminary Founder", bio: "Founded Grace Theological Seminary in 1937. His 'The Greatness of the Kingdom' articulated a mediating form of dispensationalism." },
];

export const timeline = [
  { year: 1825, era: 1, title: "Darby Ordained", locationId: "dublin", locationName: "Dublin" },
  { year: 1831, era: 1, title: "Powerscourt Conferences", locationId: "powerscourt", locationName: "Powerscourt" },
  { year: 1831, era: 1, title: "Plymouth Assembly", locationId: "plymouth", locationName: "Plymouth" },
  { year: 1836, era: 1, title: "Müller's Orphanages", locationId: "bristol", locationName: "Bristol" },
  { year: 1837, era: 1, title: "Darby in Geneva", locationId: "geneva", locationName: "Geneva" },
  { year: 1840, era: 1, title: "Darby in Lausanne", locationId: "lausanne", locationName: "Lausanne" },
  { year: 1855, era: 2, title: "Elberfeld Bible", locationId: "elberfeld", locationName: "Elberfeld" },
  { year: 1862, era: 2, title: "Darby's First US Tour", locationId: "new-york", locationName: "New York" },
  { year: 1870, era: 2, title: "Brookes in St. Louis", locationId: "st-louis", locationName: "St. Louis" },
  { year: 1875, era: 2, title: "Darby in Boston", locationId: "boston", locationName: "Boston" },
  { year: 1880, era: 2, title: "Northfield Conferences", locationId: "east-northfield", locationName: "Northfield" },
  { year: 1883, era: 2, title: "Niagara Bible Conference", locationId: "niagara", locationName: "Niagara" },
  { year: 1886, era: 2, title: "Moody Bible Institute", locationId: "chicago", locationName: "Chicago" },
  { year: 1895, era: 2, title: "Scofield in Philadelphia", locationId: "philadelphia", locationName: "Philadelphia" },
  { year: 1908, era: 3, title: "Biola Founded", locationId: "los-angeles", locationName: "Los Angeles" },
  { year: 1909, era: 3, title: "Scofield Reference Bible", locationId: "oxford", locationName: "Oxford" },
  { year: 1920, era: 3, title: "Chafer in Texas", locationId: "san-antonio", locationName: "San Antonio" },
  { year: 1924, era: 3, title: "DTS Founded", locationId: "dallas", locationName: "Dallas" },
  { year: 1940, era: 3, title: "Publishing Center", locationId: "grand-rapids", locationName: "Grand Rapids" },
  { year: 1955, era: 3, title: "Southern Growth", locationId: "atlanta", locationName: "Atlanta" },
  { year: 1965, era: 4, title: "Ryrie's 'Dispensationalism Today'", locationId: "dallas", locationName: "Dallas" },
  { year: 1986, era: 4, title: "Progressive Dispensationalism", locationId: "dallas", locationName: "Dallas" },
];
