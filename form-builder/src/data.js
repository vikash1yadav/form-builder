let questionsArray = [
  {
    serialNo: "1",
    question: "Is this a are for public the any seafarer recruitment and placement service?",
    num: "1",
  },
  {
    serialNo: "2",
    question: "Is this a private seafarer recruitment and placement service?",
    num: "2",
  },
  {
    serialNo: "3",
    question:
      "Does the SRPS use means, mechanisms or lists that are intended to prevent or deter seafarers’ from gaining employment for which they are qualified for? (not permitted)",
    num: "3",
  },
  {
    serialNo: "4",
    question:
      "Does the SRPS make use of analysis of relevant information on the maritime labour market, including the current and prospective supply of seafarers that work as crew classified by age, sex, rank and qualifications, and the industry’s requirements/ (recommended)",
    num: "4",
  },
  {
    serialNo: "5",
    question:
      "Does the SRPS have operational standards and codes of conduct as well as ethical procedures for the seafarers’ recruited. (recommended)",
    num: "5",
  },
  {
    serialNo: "6",
    question:
      "Is the SRPS licensed/certified for the operation of Recruitment and Placement services (Stating the SRPS meets the requirements of National laws and Regulations)",
    num: "6",
  },
  {
    serialNo: "7",
    question:
      "Are any fees charged directly to the seafarer for the recruitment or placement, or for providing employment? (not permitted)",
    num: "7",
  },
  {
    serialNo: "8",
    question:
      "Do the seafarers pay for their National seafarer’s book, passport, or other similar personal travel documents? (permitted)",
    num: "8",
  },
  {
    serialNo: "9",
    question:
      "Does the seafarer pay for his Visas? If not who bears the cost of Visa? (shipowner must bear this cost)",
    num: "9",
  },
  {
    serialNo: "10",
    question:
      "Does the SRPS clearly publicize costs, if any, which of the seafarers will be expected to bear in the recruitment process? (recommended)",
    num: "10",
  },
  {
    serialNo: "11",
    question:
      "Is there a statement from the top management of SRPS that they do not charge any fees for such services from seafarers? (recommended)",
    num: "11",
  },
  {
    serialNo: "12",
    question:
      "Does the SRPS maintain an up-to-date register of all seafarers recruited or placed and available for inspection: (required)",
    num: "12",
  },
  {
    serialNo: "13",
    question:
      "Is due regard given to the right to privacy and the need to protect confidentiality, the conditions under which seafarers’ personal data may be processed by SRPS, including the collection, storage, combination and communication of such data to third parties (recommended)?",
    num: "13",
  },
  {
    serialNo: "14",
    question:
      "Does the SRPS maintain, with due regard to the right to privacy and the need to protect confidentiality, full and complete records of the seafarers covered by their recruitment and placement system, which should include but not be limited to: the seafarers’ qualifications record of employment personal data relevant to employment; and medical data relevant to employment? (recommended)",
    num: "14",
  },
  {
    serialNo: "15",
    question:
      "Does the SRPS maintain up-to-date list of the ships for which they provide seafarers and ensure that there is a means by which the agency can be contacted in an emergency at all hours? (recommended)",
    num: "15",
  },
  {
    serialNo: "16",
    question:
      "Does the SRPS ensure that requests for information or advice by families of seafarers while the seafarers are at sea are dealt with promptly and sympathetically and at no cost? (recommended)",
    num: "16",
  },
  {
    serialNo: "17",
    question:
      "Does the SRPS have a procedure to ensure that no seafarer under the age of 16 years is employed, engaged or works on board a ship? (not permitted)",
    num: "17",
  },
  {
    serialNo: "18",
    question:
      "Does the SRPS have a procedure to ensure that no seafarer under the age of 18 years is employed, engaged or works on board a ship as a ships cook? (not permitted)",
    num: "18",
  },
  {
    serialNo: "19",
    question:
      "Does the SRPS have a procedure to ensure that seafarers under the age of 18 years understand the restrictions on night work and work which is likely to jeopardize their health and safety? (required)",
    num: "19",
  },
  {
    serialNo: "20",
    question:
      "Does the SRPS have a procedure to ensure that seafarers recruited or placed are informed of their rights and duties under their employment agreements prior to or in the process of engagement? (required)",
    num: "20",
  },
  {
    serialNo: "21",
    question:
      "Are the SRPS staff responsible for the supervision of private seafarer recruitment and placement service for ship’s crew with responsibility for the ship’s safe navigation and pollution prevention operations have had adequate training, including approved sea-service experience, and have relevant knowledge of the maritime industry, including the relevant maritime international instruments on training, certification and labour standards? (recommended)",
    num: "21",
  },
  {
    serialNo: "22",
    question:
      "Does the SRPS ensure that seafarers are advised of any particular conditions applicable to the job for which they are to be engaged and of the particular shipowners’ policies relating to their employment? (recommended)",
    num: "22",
  },
  {
    serialNo: "23",
    question:
      "Where the seafarers employment agreements are signed by the SRPS on behalf of the shipowner, are the seafarers’ employment agreement including any collective bargaining agreement that forms all or part of it in accordance with National Provisions. (Required. Inspector or should confirm with the Administration)",
    num: "23",
  },
  {
    serialNo: "24",
    question:
      "Does the SRPS make proper arrangements for the seafarer to examine their employment agreement before and after they are signed, to seek advice before signing, and to receive a signed original of the agreement? (required)",
    num: "24",
  },
  {
    serialNo: "25",
    question:
      "Does the SRPS verify that labour conditions on ships where seafarers are placed are in conformity with applicable collective bargaining agreements concluded between a shipowner and a representative seafarers organization and, as a matter of policy, supply seafarers only to shipowners that offer terms and conditions of employment to seafarers which comply with applicable laws or regulations or collective agreements, where applicable? (recommended)",
    num: "25",
  },
  {
    serialNo: "26",
    question:
      "Does the SRPS have procedures to ensure that seafarers recruited or placed shall not work on a ship unless they are trained or certified as competent or otherwise found qualified in accordance with Flag requirements (hold administration licenses, and SQ’s) to perform their duties and that they hold the documents necessary for the job concerned? (required)",
    num: "26",
  },
  {
    serialNo: "27",
    question:
      "Where the SRPS is authorized to sign the seafarers employment agreement on behalf of the shipowner, does the SRPS have procedures to ensure that prior to beginning work on a ship, seafarers hold a valid medical certificate attesting that they are medically fit to perform the duties they are to carry out at sea? (required)",
    num: "27",
  },
  {
    serialNo: "28",
    question:
      "Where the seafarers medical examination is arranged by the SRPS, does the SRPS ensure that the medical practitioner is duly qualified, licensed at the place of examination and / or recognized by the competent authority at the place of examination? (required)",
    num: "28",
  },
  {
    serialNo: "29",
    question:
      "Does the SRPS ensure that the medical certificate includes the information that complies with the Administration’s requirements and is issued in English for ships engaged in international voyages? (required)",
    num: "29",
  },
  {
    serialNo: "30",
    question:
      "Does the SRPS, as far as practicable, ensure that the shipowner has the means to protect seafarers from being stranded/abandoned in a foreign port? (required) Note : SRPS to ensure Shipowner has valid financial security cover as required per MLC reg A2.5.2 and A4.2 for vessels on which seafarers are placed.",
    num: "30",
  },
  {
    serialNo: "31",
    question:
      "Does the SRPS have a procedure to examine and respond to any complaint concerning its activities and advise the Administration of any unresolved complaint? (required)",
    num: "31",
  },
  {
    serialNo: "32",
    question:
      "Where the seafarers employment agreements are signed by the SRPS on behalf of the shipowner, does the SRPS ensure that the seafarer will be provided with a copy of the on-board complaint procedures applicable on the ship? (required to be provided on board)",
    num: "32",
  },
  {
    serialNo: "33",
    question:
      "Has the SRPS established a system of protection, by way of insurance or an equivalent appropriate measure, to compensate seafarers for monetary loss that they may incur as a result of the failure of the agency or the relevant shipowner under the seafarers’ employment agreement to meet its obligations to the seafarer? (required)",
    num: "33",
  },
  {
    serialNo: "34",
    question:
      "Does the SRPS have procedures in place in order to ensure that seafarers are not subject to exploitation by the SRPS or by their personnel, with regard to the offer of engagement on particular ships or by particular companies? (recommended)",
    num: "34",
  },
  {
    serialNo: "35",
    question:
      "Does the SRPS have procedures in place in order to prevent the opportunities for exploitation of seafarers arising from the issue of joining advances or any other financial transaction between the shipowner and the seafarers which are handled by the SRPS?",
    num: "35",
  },
  {
    serialNo: "36",
    question:
      "Does the SRPS have a policy in place to ensure that the procedures followed while dealing with cases of incompetence or indiscipline are consistent with the principles of natural justice, the law of the land and practice and with CBA",
    num: "36",
  },
  {
    serialNo: "37",
    question:
      "Does the SRPS as far as practicable, ensure that all mandatory certificates and documents submitted for employment are up to date and have not been fraudulently obtained and that employment references are verified? (required)",
    num: "37",
  },
];
// let questionsArray = [
//   {
//     serialNo: "1.",
//     question: "The quick brown fox jumped over the lazy dog company any",
//     num: "1",
//     extraField: "A1.16.17",
//   },
//   { serialNo: "1", question: "this game is now finish", num: "2", extraField: "" },
//   { serialNo: "1", question: "does your name also contain the game", num: "2", extraField: "" },
// ];
export default questionsArray;
