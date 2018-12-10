var colors = ['#EA614A','#ECA038','#A38456','#008836','#20649B','#6B96CA','#A87A93','#D19C95'];

var roky = [1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017];

var topzeme = ['Katar', 'Estonsko', 'Saúdská Arábie', 'Lucembursko', 'Austrálie', 'USA', 'Kanada', 'Jižní Korea', 'Nizozemsko', 'Belgie', 'Rusko', 'Česko', 'Německo', 'Japonsko', 'Irsko', 'Polsko', 'Finsko', 'Rakousko', 'Kypr', 'Řecko', 'Čína', 'Slovinsko', 'Norsko', 'Španělsko', 'Bulharsko', 'Dánsko', 'UK', 'Slovensko', 'Itálie', 'Portugalsko', 'Turecko', 'Maďarsko', 'Francie', 'Švédsko', 'Švýcarsko', 'celosvětový ø', 'Litva', 'Lotyšsko', 'Rumunsko', 'Chorvatsko', 'Brazílie', 'Indie', 'Bangladéš'];

var topemise = [{y: 43.5, co2: 114.8}, {y: 19.4, co2: 25.4, color: colors[5]}, {y: 18.1, co2: 594.7}, {y: 17.4, co2: 10.1, color: colors[5]}, {y: 16.6, co2: 406}, {y: 15.7, co2: 5087.7}, {y: 15.3, co2: 560}, {y: 13.3, co2: 679.7}, {y: 12.3, co2: 209.1, color: colors[5]}, {y: 10.7, co2: 122.1, color: colors[5]}, {y: 10.6, co2: 1525.3}, {y: 9.8, co2: 103.9, color: colors[0]}, {y: 9.3, co2: 763.8, color: colors[5]}, {y: 9.2, co2: 1176.6}, {y: 8.3, co2: 39.4, color: colors[5]}, {y: 8.1, co2: 308.6, color: colors[5]}, {y: 8.1, co2: 45, color: colors[5]}, {y: 7.4, co2: 64.2, color: colors[5]}, {y: 7, co2: 8.2, color: colors[5]}, {y: 6.7, co2: 74.9, color: colors[5]}, {y: 6.6, co2: 9232.6}, {y: 6.6, co2: 13.7, color: colors[5]}, {y: 6.6, co2: 35.3, color: colors[5]}, {y: 6.5, co2: 301.9, color: colors[5]}, {y: 6.5, co2: 45.9, color: colors[5]}, {y: 6.4, co2: 36.5, color: colors[5]}, {y: 6, co2: 398.2, color: colors[5]}, {y: 5.9, co2: 32.1, color: colors[5]}, {y: 5.8, co2: 344, color: colors[5]}, {y: 5.8, co2: 59.8, color: colors[5]}, {y: 5.1, co2: 410.9}, {y: 4.9, co2: 47.7, color: colors[5]}, {y: 4.9, co2: 320.3, color: colors[5]}, {y: 4.8, co2: 48, color: colors[5]}, {y: 4.5, co2: 38.4}, {y: 4.4, co2: 33444, color: 'gray'}, {y: 4.1, co2: 11.8, color: colors[5]}, {y: 4.1, co2: 8, color: colors[5]}, {y: 3.8, co2: 74.1, color: colors[5]}, {y: 3.7, co2: 15.4, color: colors[5]}, {y: 2.2, co2: 466.8}, {y: 1.8, co2: 2344.2}, {y: 0.5, co2: 82.8}];

var bulharsko = [{co2: 36.7, y: 4.5}, {co2: 39.2, y: 4.7}, {co2: 45.2, y: 5.4}, {co2: 51, y: 6.1}, {co2: 55.7, y: 6.6}, {co2: 62.4, y: 7.3}, {co2: 64.6, y: 7.5}, {co2: 66.6, y: 7.7}, {co2: 68.6, y: 7.9}, {co2: 69.9, y: 8.0}, {co2: 75.1, y: 8.6}, {co2: 75.9, y: 8.7}, {co2: 78.4, y: 8.9}, {co2: 82.1, y: 9.3}, {co2: 84.9, y: 9.6}, {co2: 89.1, y: 10.0}, {co2: 85.5, y: 9.6}, {co2: 87, y: 9.7}, {co2: 86, y: 9.6}, {co2: 85, y: 9.5}, {co2: 84.9, y: 9.5}, {co2: 87.9, y: 9.8}, {co2: 87.8, y: 9.8}, {co2: 86.6, y: 9.7}, {co2: 86.8, y: 9.8}, {co2: 66.2, y: 7.5}, {co2: 54, y: 6.2}, {co2: 50.9, y: 5.9}, {co2: 53.3, y: 6.2}, {co2: 51.1, y: 6.0}, {co2: 54.1, y: 6.5}, {co2: 52.6, y: 6.3}, {co2: 51.7, y: 6.3}, {co2: 49.6, y: 6.1}, {co2: 43.9, y: 5.4}, {co2: 43.6, y: 5.4}, {co2: 46.1, y: 5.8}, {co2: 44.6, y: 5.7}, {co2: 47.9, y: 6.1}, {co2: 47, y: 6.1}, {co2: 48.2, y: 6.3}, {co2: 49.2, y: 6.5}, {co2: 52.5, y: 6.9}, {co2: 50.3, y: 6.7}, {co2: 43.2, y: 5.8}, {co2: 45, y: 6.1}, {co2: 50.4, y: 6.8}, {co2: 45.3, y: 6.2}, {co2: 39.9, y: 5.5}, {co2: 42.5, y: 5.9}, {co2: 45.3, y: 6.3}, {co2: 42.2, y: 5.9}, {co2: 45.9, y: 6.5}];

var cesko = [{co2: 156.2, y: 15.9}, {co2: 157, y: 16.0}, {co2: 153.8, y: 15.7}, {co2: 160.4, y: 16.4}, {co2: 167.2, y: 17.1}, {co2: 172.5, y: 17.6}, {co2: 181, y: 18.4}, {co2: 180.7, y: 18.3}, {co2: 180.6, y: 18.2}, {co2: 181.4, y: 18.1}, {co2: 188.1, y: 18.7}, {co2: 193.7, y: 19.1}, {co2: 199.2, y: 19.5}, {co2: 201.5, y: 19.6}, {co2: 202.6, y: 19.6}, {co2: 195.5, y: 18.9}, {co2: 194.6, y: 18.8}, {co2: 191.9, y: 18.5}, {co2: 191.7, y: 18.5}, {co2: 196.1, y: 19.0}, {co2: 194.2, y: 18.8}, {co2: 192.2, y: 18.6}, {co2: 190.8, y: 18.5}, {co2: 191.2, y: 18.5}, {co2: 185.1, y: 17.9}, {co2: 162.5, y: 15.7}, {co2: 150, y: 14.5}, {co2: 138.3, y: 13.4}, {co2: 133.5, y: 12.9}, {co2: 126.2, y: 12.2}, {co2: 127.1, y: 12.3}, {co2: 129.7, y: 12.5}, {co2: 132.1, y: 12.8}, {co2: 125.1, y: 12.1}, {co2: 113.1, y: 11.0}, {co2: 125.7, y: 12.2}, {co2: 126.3, y: 12.3}, {co2: 122.4, y: 11.9}, {co2: 125.4, y: 12.2}, {co2: 125.7, y: 12.3}, {co2: 124.1, y: 12.1}, {co2: 126.1, y: 12.2}, {co2: 127.4, y: 12.3}, {co2: 120, y: 11.5}, {co2: 111.3, y: 10.6}, {co2: 115.7, y: 11.0}, {co2: 111.2, y: 10.5}, {co2: 106.7, y: 10.1}, {co2: 104.9, y: 9.9}, {co2: 99.2, y: 9.4}, {co2: 102.9, y: 9.7}, {co2: 104.5, y: 9.8}, {co2: 103.9, y: 9.8}];

var cina = [{co2: 488.5, y: 0.7}, {co2: 530.3, y: 0.7}, {co2: 475.9, y: 0.6}, {co2: 476.7, y: 0.6}, {co2: 582.5, y: 0.7}, {co2: 748.5, y: 0.9}, {co2: 881.7, y: 1.0}, {co2: 945.4, y: 1.1}, {co2: 987, y: 1.1}, {co2: 1006.8, y: 1.1}, {co2: 1131.3, y: 1.2}, {co2: 1183.1, y: 1.3}, {co2: 1293.5, y: 1.4}, {co2: 1418.5, y: 1.5}, {co2: 1458.5, y: 1.5}, {co2: 1471.2, y: 1.5}, {co2: 1448.5, y: 1.4}, {co2: 1512.4, y: 1.5}, {co2: 1607.7, y: 1.6}, {co2: 1733.3, y: 1.6}, {co2: 1835.4, y: 1.7}, {co2: 1918.2, y: 1.8}, {co2: 2063.4, y: 1.9}, {co2: 2213.3, y: 2.0}, {co2: 2311, y: 2.0}, {co2: 2326, y: 2.0}, {co2: 2457.3, y: 2.1}, {co2: 2581.5, y: 2.1}, {co2: 2790.2, y: 2.3}, {co2: 2939.6, y: 2.4}, {co2: 3028.8, y: 2.4}, {co2: 3178.6, y: 2.5}, {co2: 3166.3, y: 2.5}, {co2: 3163.4, y: 2.5}, {co2: 3294.3, y: 2.6}, {co2: 3349.7, y: 2.6}, {co2: 3511.8, y: 2.7}, {co2: 3831, y: 2.9}, {co2: 4518.5, y: 3.5}, {co2: 5318.4, y: 4.0}, {co2: 6077.9, y: 4.6}, {co2: 6654.2, y: 5.0}, {co2: 7214.8, y: 5.4}, {co2: 7351.8, y: 5.5}, {co2: 7680.7, y: 5.7}, {co2: 8104.9, y: 6.0}, {co2: 8792.3, y: 6.4}, {co2: 8966.3, y: 6.5}, {co2: 9204.2, y: 6.7}, {co2: 9206.5, y: 6.6}, {co2: 9163.2, y: 6.6}, {co2: 9113.6, y: 6.5}, {co2: 9232.6, y: 6.6}];

var francie = [{co2: 515.4, y: 9.9}, {co2: 509.4, y: 9.5}, {co2: 502.2, y: 9.4}, {co2: 500, y: 9.3}, {co2: 496.7, y: 9.4}, {co2: 484.1, y: 9.0}, {co2: 483.2, y: 9.0}, {co2: 475, y: 9.2}, {co2: 454.9, y: 8.6}, {co2: 451.5, y: 8.8}, {co2: 441.2, y: 8.1}, {co2: 432.1, y: 8.5}, {co2: 417.9, y: 7.7}, {co2: 403.8, y: 8.0}, {co2: 400.8, y: 7.3}, {co2: 391.4, y: 6.8}, {co2: 390.1, y: 6.4}, {co2: 389.1, y: 6.4}, {co2: 387, y: 7.0}, {co2: 386.4, y: 6.4}, {co2: 385.6, y: 6.5}, {co2: 385.1, y: 6.5}, {co2: 383.6, y: 6.4}, {co2: 381.9, y: 6.4}, {co2: 380.4, y: 6.6}, {co2: 380.3, y: 6.2}, {co2: 380.2, y: 6.9}, {co2: 380.2, y: 6.3}, {co2: 372.8, y: 6.4}, {co2: 371.2, y: 6.0}, {co2: 371.1, y: 6.0}, {co2: 370.6, y: 6.5}, {co2: 369.4, y: 6.6}, {co2: 368.2, y: 7.3}, {co2: 368, y: 6.5}, {co2: 364, y: 6.3}, {co2: 362.8, y: 6.5}, {co2: 362.3, y: 6.2}, {co2: 361.5, y: 5.7}, {co2: 356.4, y: 6.1}, {co2: 356.2, y: 6.3}, {co2: 356.2, y: 5.7}, {co2: 354.5, y: 7.1}, {co2: 350.4, y: 6.0}, {co2: 337.7, y: 5.3}, {co2: 337.7, y: 5.3}, {co2: 335.9, y: 5.3}, {co2: 329.2, y: 6.7}, {co2: 328.3, y: 6.7}, {co2: 320.3, y: 4.9}, {co2: 314.8, y: 4.9}, {co2: 309.2, y: 4.8}, {co2: 304.2, y: 4.7}];

var indie = [{co2: 167.7, y: 0.3}, {co2: 170.3, y: 0.3}, {co2: 174.8, y: 0.3}, {co2: 182.9, y: 0.3}, {co2: 197.9, y: 0.4}, {co2: 190.3, y: 0.3}, {co2: 207, y: 0.4}, {co2: 219.2, y: 0.4}, {co2: 219.7, y: 0.4}, {co2: 239.3, y: 0.4}, {co2: 254.3, y: 0.4}, {co2: 264.8, y: 0.4}, {co2: 278.7, y: 0.4}, {co2: 278.1, y: 0.4}, {co2: 297.4, y: 0.4}, {co2: 311.2, y: 0.4}, {co2: 341.3, y: 0.5}, {co2: 343.6, y: 0.5}, {co2: 366.6, y: 0.5}, {co2: 388.1, y: 0.5}, {co2: 410.4, y: 0.5}, {co2: 439.6, y: 0.6}, {co2: 476.4, y: 0.6}, {co2: 513.4, y: 0.6}, {co2: 560.5, y: 0.7}, {co2: 603.2, y: 0.7}, {co2: 635.8, y: 0.7}, {co2: 673.2, y: 0.7}, {co2: 693.6, y: 0.8}, {co2: 724.9, y: 0.8}, {co2: 774.5, y: 0.8}, {co2: 813.6, y: 0.8}, {co2: 855.4, y: 0.9}, {co2: 895, y: 0.9}, {co2: 911.3, y: 0.9}, {co2: 962.4, y: 0.9}, {co2: 970.2, y: 0.9}, {co2: 1021.9, y: 0.9}, {co2: 1062.3, y: 1.0}, {co2: 1116.6, y: 1.0}, {co2: 1204.6, y: 1.1}, {co2: 1252.5, y: 1.1}, {co2: 1365.5, y: 1.2}, {co2: 1466.9, y: 1.2}, {co2: 1594.4, y: 1.3}, {co2: 1661.8, y: 1.3}, {co2: 1737.2, y: 1.4}, {co2: 1850.5, y: 1.5}, {co2: 1930.9, y: 1.5}, {co2: 2084.6, y: 1.6}, {co2: 2146.3, y: 1.6}, {co2: 2251, y: 1.7}, {co2: 2344.2, y: 1.8}];

var japonsko = [{co2: 1284.5, y: 10.0}, {co2: 1276.7, y: 9.9}, {co2: 1274.6, y: 9.9}, {co2: 1273.1, y: 9.9}, {co2: 1266, y: 9.9}, {co2: 1256.2, y: 9.8}, {co2: 1252.2, y: 9.7}, {co2: 1242.5, y: 9.7}, {co2: 1231.8, y: 9.6}, {co2: 1218.2, y: 9.6}, {co2: 1215.1, y: 9.5}, {co2: 1209.6, y: 9.5}, {co2: 1200.3, y: 9.5}, {co2: 1198.7, y: 9.4}, {co2: 1197, y: 9.4}, {co2: 1196.9, y: 9.4}, {co2: 1192.1, y: 9.3}, {co2: 1182.4, y: 9.2}, {co2: 1180.5, y: 9.2}, {co2: 1180.2, y: 9.3}, {co2: 1176.6, y: 9.2}, {co2: 1165.3, y: 9.2}, {co2: 1163.7, y: 9.2}, {co2: 1111.9, y: 8.9}, {co2: 1110.7, y: 8.6}, {co2: 1102.6, y: 8.8}, {co2: 1102, y: 8.8}, {co2: 1091.3, y: 8.8}, {co2: 1040.1, y: 8.4}, {co2: 1012.5, y: 8.2}, {co2: 995, y: 9.1}, {co2: 985.7, y: 8.9}, {co2: 966, y: 8.0}, {co2: 959.7, y: 8.2}, {co2: 955, y: 8.3}, {co2: 951.2, y: 8.4}, {co2: 943.1, y: 7.7}, {co2: 939.3, y: 7.6}, {co2: 934.2, y: 8.1}, {co2: 933, y: 7.6}, {co2: 931.7, y: 7.9}, {co2: 926.6, y: 7.8}, {co2: 923.6, y: 8.2}, {co2: 880.9, y: 8.2}, {co2: 874.5, y: 7.3}, {co2: 874, y: 7.3}, {co2: 845.3, y: 7.9}, {co2: 810.5, y: 7.7}, {co2: 731.3, y: 7.1}, {co2: 641.5, y: 6.3}, {co2: 578, y: 5.7}, {co2: 492.6, y: 4.9}, {co2: 446.8, y: 4.5}]

var nemecko = [{co2: 1115.1, y: 14.1}, {co2: 1112.3, y: 14.2}, {co2: 1092.1, y: 13.9}, {co2: 1083.8, y: 13.7}, {co2: 1077.2, y: 13.8}, {co2: 1071.2, y: 13.6}, {co2: 1066, y: 13.5}, {co2: 1055.2, y: 13.4}, {co2: 1044, y: 13.3}, {co2: 1042.3, y: 13.3}, {co2: 1042, y: 13.3}, {co2: 1040.8, y: 13.4}, {co2: 1033.1, y: 13.3}, {co2: 1032.4, y: 13.3}, {co2: 1025.9, y: 13.1}, {co2: 1024.1, y: 13.0}, {co2: 1014.7, y: 13.0}, {co2: 1010.8, y: 12.9}, {co2: 1010.4, y: 12.9}, {co2: 1003.2, y: 12.7}, {co2: 1000.7, y: 12.8}, {co2: 998.8, y: 12.7}, {co2: 965.1, y: 12.1}, {co2: 943.7, y: 12.1}, {co2: 919.2, y: 11.5}, {co2: 911.6, y: 11.3}, {co2: 910.6, y: 11.2}, {co2: 909.7, y: 11.9}, {co2: 900.2, y: 11.7}, {co2: 892.3, y: 11.0}, {co2: 891.4, y: 11.5}, {co2: 884.4, y: 10.9}, {co2: 883.3, y: 10.8}, {co2: 874.2, y: 10.7}, {co2: 866, y: 10.6}, {co2: 857.9, y: 10.5}, {co2: 852.6, y: 10.4}, {co2: 851.8, y: 10.5}, {co2: 849.5, y: 10.4}, {co2: 843.7, y: 10.3}, {co2: 840.1, y: 10.3}, {co2: 822.2, y: 10.1}, {co2: 807.2, y: 9.9}, {co2: 806.5, y: 9.9}, {co2: 795.1, y: 9.8}, {co2: 779.9, y: 9.6}, {co2: 770.7, y: 9.5}, {co2: 765.4, y: 9.3}, {co2: 763.8, y: 9.3}, {co2: 761, y: 9.4}, {co2: 753.5, y: 9.2}, {co2: 751, y: 9.3}, {co2: 749.4, y: 9.2}];

var polsko = [{co2: 486, y: 12.9}, {co2: 475.2, y: 12.6}, {co2: 469.6, y: 12.6}, {co2: 466.1, y: 13.1}, {co2: 457.9, y: 12.3}, {co2: 457, y: 12.1}, {co2: 447.5, y: 12.1}, {co2: 444.2, y: 12.6}, {co2: 437.9, y: 12.6}, {co2: 429.9, y: 11.8}, {co2: 428.8, y: 11.8}, {co2: 419.5, y: 11.7}, {co2: 417.8, y: 12.1}, {co2: 400.9, y: 11.7}, {co2: 380.4, y: 11.2}, {co2: 374, y: 9.9}, {co2: 368.8, y: 9.7}, {co2: 354.3, y: 9.2}, {co2: 353.4, y: 9.3}, {co2: 352.4, y: 10.5}, {co2: 352.2, y: 9.2}, {co2: 349.7, y: 9.1}, {co2: 342.8, y: 10.3}, {co2: 340.8, y: 8.9}, {co2: 339.4, y: 10.2}, {co2: 334.3, y: 8.7}, {co2: 330.1, y: 8.6}, {co2: 323.3, y: 8.4}, {co2: 323.1, y: 8.4}, {co2: 322.9, y: 8.4}, {co2: 321.9, y: 9.8}, {co2: 320.2, y: 8.4}, {co2: 319.2, y: 8.3}, {co2: 317, y: 8.3}, {co2: 312.8, y: 9.6}, {co2: 310.1, y: 8.1}, {co2: 308.6, y: 8.1}, {co2: 307.5, y: 8.0}, {co2: 307, y: 8.0}, {co2: 305, y: 8.0}, {co2: 304.3, y: 8.0}, {co2: 303.4, y: 7.9}, {co2: 301.7, y: 7.9}, {co2: 299.4, y: 7.8}, {co2: 299, y: 9.2}, {co2: 297.7, y: 7.7}, {co2: 294.2, y: 7.6}, {co2: 293.2, y: 7.7}, {co2: 293, y: 7.7}, {co2: 281.6, y: 8.8}, {co2: 263.5, y: 8.3}, {co2: 257.2, y: 8.1}, {co2: 253, y: 8.1}];

var rusko = [{co2: 0, y: null}, {co2: 0, y: null}, {co2: 0, y: null}, {co2: 0, y: null}, {co2: 0, y: null}, {co2: 0, y: null}, {co2: 0, y: null}, {co2: 0, y: null}, {co2: 0, y: null}, {co2: 0, y: null}, {co2: 0, y: null}, {co2: 0, y: null}, {co2: 0, y: null}, {co2: 0, y: null}, {co2: 0, y: null}, {co2: 0, y: null}, {co2: 0, y: null}, {co2: 0, y: null}, {co2: 0, y: null}, {co2: 0, y: null}, {co2: 2173, y: 15.2}, {co2: 2211.4, y: 15.4}, {co2: 2269, y: 15.6}, {co2: 2292.4, y: 15.7}, {co2: 2290.8, y: 15.6}, {co2: 2234.7, y: 15.1}, {co2: 2168.9, y: 14.7}, {co2: 2073.4, y: 14.0}, {co2: 1896.7, y: 12.8}, {co2: 1727.7, y: 11.6}, {co2: 1617.8, y: 10.9}, {co2: 1564.2, y: 10.6}, {co2: 1464.1, y: 9.9}, {co2: 1447, y: 9.8}, {co2: 1447, y: 9.8}, {co2: 1453.3, y: 9.9}, {co2: 1466.5, y: 10.1}, {co2: 1466.3, y: 10.1}, {co2: 1495.2, y: 10.3}, {co2: 1490.3, y: 10.3}, {co2: 1466.6, y: 10.2}, {co2: 1535, y: 10.7}, {co2: 1528.1, y: 10.7}, {co2: 1554.3, y: 10.9}, {co2: 1448.5, y: 10.1}, {co2: 1489.8, y: 10.4}, {co2: 1555.8, y: 10.9}, {co2: 1571, y: 11.0}, {co2: 1524.4, y: 10.6}, {co2: 1533.3, y: 10.7}, {co2: 1495.5, y: 10.4}, {co2: 1510.5, y: 10.5}, {co2: 1525.3, y: 10.6}];

var uk = [{co2: 718.2, y: 12.8}, {co2: 715.3, y: 12.9}, {co2: 707.3, y: 12.8}, {co2: 689.5, y: 12.5}, {co2: 689.2, y: 12.3}, {co2: 687.8, y: 12.7}, {co2: 682.4, y: 12.2}, {co2: 680.7, y: 12.5}, {co2: 669.7, y: 12.2}, {co2: 668.1, y: 11.9}, {co2: 659.3, y: 11.7}, {co2: 646.9, y: 11.5}, {co2: 639, y: 11.4}, {co2: 637.7, y: 11.3}, {co2: 630.4, y: 11.2}, {co2: 606.8, y: 10.8}, {co2: 602.8, y: 10.5}, {co2: 593, y: 10.4}, {co2: 591.7, y: 10.4}, {co2: 591.3, y: 10.4}, {co2: 588.3, y: 10.4}, {co2: 585.8, y: 10.4}, {co2: 584.7, y: 10.2}, {co2: 581.9, y: 10.2}, {co2: 578.5, y: 9.5}, {co2: 575.4, y: 9.5}, {co2: 574.3, y: 9.7}, {co2: 573.4, y: 9.9}, {co2: 572, y: 10.1}, {co2: 570.5, y: 9.9}, {co2: 569.5, y: 10.1}, {co2: 568.5, y: 9.5}, {co2: 568.4, y: 9.3}, {co2: 563.4, y: 10.0}, {co2: 563, y: 9.6}, {co2: 563, y: 9.4}, {co2: 560.2, y: 9.0}, {co2: 556.4, y: 9.6}, {co2: 556.1, y: 9.5}, {co2: 554.6, y: 9.5}, {co2: 553.3, y: 9.5}, {co2: 553.3, y: 9.3}, {co2: 547, y: 9.3}, {co2: 543.5, y: 9.6}, {co2: 529, y: 8.4}, {co2: 513, y: 8.2}, {co2: 510.9, y: 8.0}, {co2: 497.4, y: 7.7}, {co2: 494.2, y: 7.7}, {co2: 455.7, y: 7.0}, {co2: 435.7, y: 6.7}, {co2: 410.4, y: 6.2}, {co2: 398.2, y: 6.0}];

var us = [{co2: 3480.1, y: 17.4}, {co2: 3675.5, y: 18.2}, {co2: 3772.6, y: 18.5}, {co2: 3994.2, y: 19.4}, {co2: 4170.1, y: 20.1}, {co2: 4298.2, y: 20.5}, {co2: 4340.7, y: 20.5}, {co2: 4564.7, y: 21.4}, {co2: 4764.4, y: 22.1}, {co2: 4596.4, y: 21.2}, {co2: 4466.3, y: 20.4}, {co2: 4741.9, y: 21.4}, {co2: 4900.3, y: 21.9}, {co2: 4844.4, y: 21.5}, {co2: 4943.4, y: 21.7}, {co2: 4773.5, y: 20.8}, {co2: 4611.3, y: 19.9}, {co2: 4374.6, y: 18.7}, {co2: 4358.7, y: 18.4}, {co2: 4557.8, y: 19.1}, {co2: 4573.7, y: 19.0}, {co2: 4585.5, y: 18.9}, {co2: 4728.6, y: 19.3}, {co2: 4948.8, y: 20.0}, {co2: 5037.9, y: 20.1}, {co2: 4953, y: 19.6}, {co2: 4907.6, y: 19.2}, {co2: 4986.8, y: 19.4}, {co2: 5097.3, y: 19.6}, {co2: 5174.7, y: 19.7}, {co2: 5205.4, y: 19.6}, {co2: 5386.9, y: 20.0}, {co2: 5474.3, y: 20.1}, {co2: 5508.8, y: 20.0}, {co2: 5553.9, y: 19.9}, {co2: 5726.9, y: 20.3}, {co2: 5623.5, y: 19.7}, {co2: 5652.8, y: 19.7}, {co2: 5725.7, y: 19.7}, {co2: 5826.5, y: 19.9}, {co2: 5863.7, y: 19.9}, {co2: 5787.9, y: 19.4}, {co2: 5881.4, y: 19.6}, {co2: 5704, y: 18.8}, {co2: 5295.8, y: 17.3}, {co2: 5508.3, y: 17.8}, {co2: 5374.7, y: 17.3}, {co2: 5168.6, y: 16.5}, {co2: 5309.1, y: 16.8}, {co2: 5360.1, y: 16.9}, {co2: 5214.4, y: 16.3}, {co2: 5129.5, y: 15.9}, {co2: 5087.7, y: 15.7}];

var svet = [{co2: 11189.5, y: 3.4}, {co2: 11704.2, y: 3.4}, {co2: 12062.2, y: 3.5}, {co2: 12719.2, y: 3.6}, {co2: 13516.1, y: 3.7}, {co2: 14267, y: 3.9}, {co2: 14762.6, y: 3.9}, {co2: 15464.8, y: 4.0}, {co2: 16312.1, y: 4.2}, {co2: 16225.8, y: 4.1}, {co2: 16246.4, y: 4.0}, {co2: 17126.4, y: 4.1}, {co2: 17673.2, y: 4.2}, {co2: 17952.4, y: 4.2}, {co2: 18527.8, y: 4.2}, {co2: 18364.1, y: 4.1}, {co2: 18129.7, y: 4.0}, {co2: 17957.6, y: 3.9}, {co2: 18128.9, y: 3.9}, {co2: 18798.1, y: 3.9}, {co2: 19195.6, y: 3.9}, {co2: 19530, y: 3.9}, {co2: 20135.5, y: 4.0}, {co2: 20804, y: 4.0}, {co2: 21202.1, y: 4.0}, {co2: 21295.3, y: 4.0}, {co2: 21290.7, y: 3.9}, {co2: 21377.7, y: 3.9}, {co2: 21411.5, y: 3.8}, {co2: 21650.4, y: 3.8}, {co2: 21897.7, y: 3.8}, {co2: 22518.1, y: 3.9}, {co2: 22730.3, y: 3.8}, {co2: 22776.5, y: 3.8}, {co2: 23076.6, y: 3.8}, {co2: 23623, y: 3.8}, {co2: 23944.2, y: 3.8}, {co2: 24486.3, y: 3.9}, {co2: 25697.2, y: 4.0}, {co2: 27024.5, y: 4.2}, {co2: 28133.2, y: 4.3}, {co2: 29017.4, y: 4.4}, {co2: 30078.7, y: 4.5}, {co2: 30381.8, y: 4.5}, {co2: 29714.2, y: 4.3}, {co2: 31074.2, y: 4.5}, {co2: 31970.5, y: 4.5}, {co2: 32317.8, y: 4.5}, {co2: 32802, y: 4.5}, {co2: 32886.8, y: 4.5}, {co2: 32851.9, y: 4.4}, {co2: 33017.6, y: 4.4}, {co2: 33444, y: 4.4}];

var topelektrarny = ["Elektrárna Počerady","Elektrárny Prunéřov","Elektrárny Tušimice","Sokolovská uhelná","Unipetrol RPA","Elektrárna Chvaletice","Provozovna Třinec","Elektrárna Ledvice","ArcelorMittal Ostrava","Elektrárna a teplárna Mělník"];

var topcremise = [{provozovatel: "Elektrárna Počerady, a.s.", kraj: "Ústecký", y: 5.64}, {provozovatel: "ČEZ, a.s.", kraj: "Ústecký", y: 4.95}, {provozovatel: "ČEZ, a.s.", kraj: "Ústecký", y: 4.25}, {provozovatel: "Sokolovská uhelná, právní nástupce, a.s.", kraj: "Karlovarský", y: 4.2}, {provozovatel: "UNIPETROL RPA, s.r.o.", kraj: "Ústecký", y: 3.74}, {provozovatel: "Sev.en EC, a.s.", kraj: "Pardubický", y: 3.04}, {provozovatel: "TŘINECKÉ ŽELEZÁRNY, a.s.", kraj: "Moravskoslezský", y: 2.63}, {provozovatel: "ČEZ, a.s.", kraj: "Ústecký", y: 2.55}, {provozovatel: "ArcelorMittal Ostrava a.s.", kraj: "Moravskoslezský", y: 2.54}, {provozovatel: "ČEZ, a.s.", kraj: "Středočeský", y: 2.51}];

Highcharts.chart('topcr', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Emise CO2'
    },
    subtitle: {
        text: '10 největších znečišťovatelů v ČR'
    },
    xAxis: {
        categories: topelektrarny
    },
    yAxis: {
        title: {
            text: 'emise CO2'
        },
        labels: {
            formatter: function () {
                return this.value + ' mil. tun';
            }
        }
    },
    tooltip: {
        pointFormat: '{point.series.name}: <b>{point.y} mil. tun</b><br/>Provozovatel: <b>{point.provozovatel}</b><br/>Kraj: <b>{point.kraj}</b>',
    },
    legend: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    credits: {
        href: 'http://www.znecistovatele.cz/',
        text: 'Zdroj: Arnika'
    },
    series: [{
        name: 'Emise CO2',
        data: topcremise,
        color: colors[2]
    }]
});

Highcharts.chart('topemise', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Emise CO2 na hlavu'
    },
    subtitle: {
        text: 'vybrané země, 2017'
    },
    xAxis: {
        categories: topzeme
    },
    yAxis: {
        title: {
            text: 'CO2 na obyvatele'
        },
        labels: {
            formatter: function () {
                return this.value + ' t';
            }
        }
    },
    tooltip: {
        pointFormat: '{point.series.name}: <b>{point.y} tun na obyvatele</b> ({point.co2} milionů tun celkem)<br/>',
    },
    legend: {
        labelFormatter: function () {
            return this.name;
        }
    },
    exporting: {
        enabled: false
    },
    credits: {
        href: 'https://www.bp.com/en/global/corporate/energy-economics/statistical-review-of-world-energy/downloads.html',
        text: 'Zdroj: emise BP, populace OSN'
    },
    plotOptions: {
        column: {
        	pointPadding: 0.1,
        	pointWidth: 15,
        	borderWidth: 0,
        	events: {
            	legendItemClick: function () {
                	return false;
            	}
        	}
    	}
    },
    series: [{
        name: 'Emise CO2',
        data: topemise,
        color: colors[2],
        showInLegend: false
    }, {
        name: 'Česko',
        data: [],
        color: colors[0]
    }, {
        name: 'země EU',
        data: [],
        color: colors[5]
    }, {
        name: 'země mimo EU',
        data: [],
        color: colors[2]
    }, {
        name: 'globální průměr',
        data: [],
        color: 'gray'
    }]
});

Highcharts.chart('globalemise', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Emise CO2 na hlavu, časová řada'
    },
    subtitle: {
        text: 'vybrané země, 1965 až 2017'
    },
    xAxis: {
        categories: roky
    },
    yAxis: {
        title: {
            text: 'CO2 na obyvatele'
        },
        labels: {
            formatter: function () {
                return this.value + ' t';
            }
        }
    },
    tooltip: {
        pointFormat: '{point.series.name}: <b>{point.y} tun CO2 na obyvatele</b> ({point.co2} milionů tun celkem)<br/>',
    },
    exporting: {
        enabled: false
    },
    credits: {
        href: 'https://www.bp.com/en/global/corporate/energy-economics/statistical-review-of-world-energy/downloads.html',
        text: 'Zdroj: emise BP, populace OSN'
    },
    plotOptions: {
        line: {
            marker: {
                symbol: 'circle'
            }
        }
    },
    series: [{
        name: 'Česko',
        data: cesko,
        color: colors[0]
    }, {
        name: 'Čína',
        data: cina,
        color: colors[1]
    }, {
        name: 'Indie',
        data: indie,
        color: colors[2],
        visible: false
    }, {
        name: 'Japonsko',
        data: japonsko,
        color: colors[7],
        visible: false
    }, {
        name: 'Německo',
        data: nemecko,
        color: colors[4],
        visible: false
    }, {
        name: 'Rusko',
        data: rusko,
        color: colors[5]
    }, {
        name: 'UK',
        data: uk,
        color: colors[6],
        visible: false
    }, {
        name: 'USA',
        data: us,
        color: colors[3]
    }, {
        name: 'svět',
        data: svet,
        color: 'gray'
    }]
});