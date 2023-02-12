import { newAllQuestionKeyCombinationArray } from "./keyCreator";
let emptyKeyArray = [
  "recruitment_and_placement",
  "private_seafarer_recruitment",
  "are_intended_to",
  "use_of_analysis",
  "the_srps_have",
  "is_the_srps",
  "are_any_fees",
  "national_seafarers_book",
  "who_bears_the",
  "in_the_recruitment",
  "do_not_charge",
  "uptodate_register_of",
  "privacy_and_the",
  "regard_to_the",
  "an_emergency_at",
  "the_seafarers_are",
  "a_ship_not",
  "employed_engaged_or",
  "and_work_which",
  "recruited_or_placed",
  "experience_and_have",
  "for_which_they",
  "inspector_or_should",
  "after_they_are",
  "matter_of_policy",
  "the_documents_necessary",
  "valid_medical_certificate",
  "srps_ensure_that",
  "the_administrations_requirements",
  "the_means_to",
  "the_administration_of",
  "the_srps_on",
  "appropriate_measure_to",
  "ensure_that_seafarers",
  "the_opportunities_for",
  "are_consistent_with",
  "all_mandatory_certificates",
];

function StructureCreator({ serialNo, question, num, keyCreator ,extraField}) {
  keyCreator(question);
  console.log(extraField,"Extrafield")

  const structureHTML = `
    <div class="section">
              <div class="rows">
                <div class="col-1 text-center">
                  <p class="num-label">${serialNo}</p>
                </div>
                <div class="col-11">
                  <label class="ors-form-label">${question}</label>
                  <div class="rows">
                    <div class="col-3 main-radio" data-fieldtype="radio-group" data-bind="foreach:{
                        data:[
                          {id:'yes',label:'Yes'},
                          {id:'no',label:'No'}
                        ],
                        as:'option'
                      }">
                      <div class="radio-common"
                        data-bind="css:{'selected':vm.formData.${
                          newAllQuestionKeyCombinationArray[num - 1]
                        }()===option.id}">
                        <input type="radio" name="${
                          newAllQuestionKeyCombinationArray[num - 1]
                        }" data-bind="
                            checkedValue: option.id,
                            checked: vm.formData.${
                              newAllQuestionKeyCombinationArray[num - 1]
                            }, 
                            attr:{
                              id:'${
                                newAllQuestionKeyCombinationArray[num - 1]
                              }'+'-'+option.id,disabled:vm.isReadOnlyField('${
                                newAllQuestionKeyCombinationArray[num - 1]
                            }')
                            }" />
                        <label
                          data-bind="text:option.label, attr:{for:'${
                            newAllQuestionKeyCombinationArray[num - 1]
                          }'+'-'+option.id}"></label>
                      </div>
                    </div>
                    <div class="col-9 ors-form-control textarea-input" data-fieldtype="textarea">
                      <textarea class="textarea-text" name="${
                        newAllQuestionKeyCombinationArray[num - 1]
                      }_remarks"
                        placeholder="Remarks by Auditor" style="height: 30px;"
                        data-bind="expandable:{min:1},value:vm.formData.${
                          newAllQuestionKeyCombinationArray[num - 1]
                        }_remarks,attr:{readonly:vm.isReadOnlyField('${
                          newAllQuestionKeyCombinationArray[num - 1]
                        }_remarks')}"></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
               `;
  return (
    <>
      {structureHTML} <br />
    </>
  );
}
export default StructureCreator;
