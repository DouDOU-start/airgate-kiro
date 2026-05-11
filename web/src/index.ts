import { AccountForm } from './components/AccountForm';
import { UsageWindow } from './components/UsageWindow';
import type { AccountFormProps } from './components/AccountForm';

export interface PluginFrontendModule {
  accountForm?: React.ComponentType<AccountFormProps>;
  usageWindow?: React.ComponentType<{ windows: Array<{ key?: string; label: string; used_percent: number; reset_seconds: number }> }>;
}

const plugin: PluginFrontendModule = {
  accountForm: AccountForm,
  usageWindow: UsageWindow,
};

export default plugin;
