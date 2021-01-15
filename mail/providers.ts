import { providerMap } from './provider.map';
import { MailService } from './service';

const providers = [MailService];

const getProviders = function(): any {
  return providers;
};

export { getProviders };
