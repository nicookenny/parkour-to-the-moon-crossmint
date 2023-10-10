import { AxiosInstance } from 'axios';
export const wait = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
export class UniverseRepository {
  constructor(public api: AxiosInstance) {}

  async getGoal() {
    const ID = 'd3c5ae3d-efd8-4a9b-acee-3661450db75d';

    const { data } = await this.api.get(`/map/${ID}/goal`);

    await wait(1000);

    return data.goal;
  }
}
