import type { ComponentType } from "react"
import {
  AnsibleIcon,
  AnthropicIcon,
  AwsEcsIcon,
  AwsIcon,
  CodeRabbitIcon,
  GitHubActionsIcon,
  ConfluenceIcon,
  CursorIcon,
  GitHubBrandIcon,
  JiraIcon,
  MatlabIcon,
  NodeIcon,
  OpenAIIcon,
  PyTorchIcon,
  PythonIcon,
  ReactIcon,
  SnykIcon,
  SonarQubeIcon,
  SqlIcon,
  TailwindIcon,
  TerraformIcon,
  TypeScriptIcon,
  VercelIcon,
} from "../components/icons/TechIcons"

export type StackItem = {
  name: string
  icon: ComponentType<{ size?: number; className?: string }>
}

export const technologies: StackItem[] = [
  { name: "Python", icon: PythonIcon },
  { name: "PyTorch", icon: PyTorchIcon },
  { name: "SQL", icon: SqlIcon },
  { name: "MATLAB", icon: MatlabIcon },
  { name: "AWS", icon: AwsIcon },
  { name: "AWS ECS", icon: AwsEcsIcon },
  { name: "Bedrock", icon: AwsIcon },
  { name: "Terraform", icon: TerraformIcon },
  { name: "React", icon: ReactIcon },
  { name: "TypeScript", icon: TypeScriptIcon },
  { name: "Tailwind CSS", icon: TailwindIcon },
  { name: "Node.js", icon: NodeIcon },
  { name: "Ansible", icon: AnsibleIcon },
]

export const tools: StackItem[] = [
  { name: "Jira", icon: JiraIcon },
  { name: "Confluence", icon: ConfluenceIcon },
  { name: "GitHub", icon: GitHubBrandIcon },
  { name: "GitHub Actions", icon: GitHubActionsIcon },
  { name: "Cursor", icon: CursorIcon },
  { name: "Claude Code", icon: AnthropicIcon },
  { name: "CodeRabbit", icon: CodeRabbitIcon },
  { name: "ChatGPT", icon: OpenAIIcon },
  { name: "SonarQube", icon: SonarQubeIcon },
  { name: "Snyk", icon: SnykIcon },
  { name: "Vercel", icon: VercelIcon },
]
