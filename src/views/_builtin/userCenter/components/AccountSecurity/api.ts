import { request } from '@/service/request';

export default {
  getById: (id: string) => request.get(`/mk/market/${id}`)
};
