import axios from 'axios';
export class CrossmintAPI {
  private URL: string;
  private candidateId = 'd3c5ae3d-efd8-4a9b-acee-3661450db75d';

  constructor(EP: string) {
    this.URL = `https://challenge.crossmint.io/api/${EP}`;
  }
  async addElement(payload: {
    row: number;
    column: number;
    color?: string;
    direction?: string;
  }) {
    console.log(`Calling ${this.URL} with ${JSON.stringify(payload)}}`);
    const response = await axios.post(`${this.URL}`, {
      ...payload,
      candidateId: this.candidateId,
    });
    return response.data;
  }

  async removeElement(x: number, y: number) {
    const response = await axios.delete(`${this.URL}`, {
      data: {
        x,
        y,
        candidateId: this.candidateId,
      },
    });
    return response.data;
  }
}
