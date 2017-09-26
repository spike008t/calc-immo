
import React, { Component } from 'react';

import InputField from './InputField';

class Parameters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      montant: 300000,
      apport: 12500,
      duree: 20,
      assurance: 3 / 100,
      taux: 3,
      caution: 0,
      notaire: 24000
    };
  }

  render() {
    return (
      <form>
        <div className="row">
          <div className="col-4">
            <InputField
              name="montant"
              addon="&euro;"
              title="Montant du bien"
              value={this.state.montant}
              type="number"
              help="Montant du bien à acheter"
            />
          </div>
          <div className="col">
            <InputField
              name="apport"
              addon="&euro;"
              title="Apport personnel"
              value={this.state.apport}
              type="number"
              help="Apport personnel"
            />
          </div>
          <div className="col-4">
            <InputField
              name="duree"
              addon="ans"
              title="Durée du prêt"
              value={this.state.duree}
              type="number"
              help="Nombre d'années"
            />
          </div>
          <div className="col-4">
            <InputField
              name="assurance"
              addon="%"
              title="Assurance"
              value={this.state.assurance}
              type="number"
            />
          </div>
          <div className="col-4">
            <InputField
              name="taux"
              addon="%"
              title="Taux du prêt"
              value={this.state.taux}
              type="number"
              help="Taux d'intérêt"
            />
          </div>
          <div className="col-6">
            <InputField
              name="caution"
              addon="&euro;"
              title="Caution ou hypothèque"
              value={this.state.caution}
              type="number"
              help="Caution ou hypothèque ~2%"
            />
          </div>
          <div className="col-6">
            <InputField
              name="notaire"
              addon="&euro;"
              title="Frais de notaire"
              value={this.state.notaire}
              type="number"
            />
          </div>
          <div className="col-6">
            <InputField
              name="mensualite-assurance"
              addon="&euro;"
              title="mensualité de l'assurance"
              value="24000"
              type="number"
            />
          </div>
          <div className="col-6">
            <InputField
              name="mensualite-hors-assurance"
              addon="&euro;"
              title="mensualite hors assurance"
              value="24000"
              type="number"
            />
          </div>
          <div className="col-6">
            <InputField
              name="mensualite-avec-assurance"
              addon="&euro;"
              title="Mensualité avec assurance"
              value="24000"
              type="number"
            />
          </div>
          <div className="col-6">
            <InputField
              name="cout-credit"
              addon="&euro;"
              title="Cout total du crédit"
              value="24000"
              type="number"
            />
          </div>
        </div>
      </form>
    );
  }
}

export default Parameters;