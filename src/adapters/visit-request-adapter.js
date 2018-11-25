import moment from "moment";

export default class VisitRequestAdapter {
  constructor(visit) {
    this.visit = visit;
  }

  toRequest() {
    return {
      "date": moment(this.visit.startDate).format("YYYY/MM/DD HH:mm:ss"),
      "description": this.visit.description,
      "id": this.visit.id,
      "pet": {
        "birthDate": "1970/01/01",
        "id": this.visit.petId,
        "name": "",
        "owner": {
          "address": "",
          "city": "",
          "firstName": "",
          "id": 0,
          "lastName": "",
          "pets": [
            {}
          ],
          "telephone": ""
        },
        "type": {
        }
      },
      "vet": {
        "id": this.visit.vetId
      }
    }
  }
}