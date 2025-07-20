import React, { useState } from "react";
import { Plus, FolderOpen, FileText, ChevronDown } from "lucide-react";

const AIScriptsInterface = () => {
  const [selectedFile, setSelectedFile] = useState("emotion_classifier.txt");
  const [expandedFolders, setExpandedFolders] = useState<
    Record<string, boolean>
  >({ prompts: true, configs: true });

  const fileStructure: FileTreeItem[] = [
    {
      type: "folder",
      name: "prompts",
      children: [
        { type: "file", name: "emotion_classifier.txt", active: true },
        { type: "file", name: "empathetic_sms_generator.txt", active: false },
        { type: "file", name: "urgency_sms_generator.txt", active: true },
      ],
    },
    {
      type: "folder",
      name: "configs",
      children: [
        { type: "file", name: "offer_logic_tiers.json", active: true },
      ],
    },
  ];

  const fileContent: { [key: string]: string } = {
    "emotion_classifier.txt": `Analyze the following text and classify the user's primary emotion. Your response must be a single word from this list: [Anxiety, Curiosity, Fatigue, Urgency, Worry, Positive, Negative, Neutral].

Text: {{lead_message}}`,
  };

  interface FileItem {
    type: "file";
    name: string;
    active: boolean;
  }

  interface FolderItem {
    type: "folder";
    name: string;
    children: FileTreeItem[];
  }

  type FileTreeItem = FileItem | FolderItem;

  // interface ExpandedFolders {
  //   [key: string]: boolean;
  // }

  const toggleFolder = (folderName: string) => {
    setExpandedFolders((prev) => ({
      ...prev,
      [folderName]: !prev[folderName],
    }));
  };

  interface SelectFileFn {
    (fileName: string): void;
  }

  const selectFile: SelectFileFn = (fileName: string) => {
    setSelectedFile(fileName);
  };

  // interface RenderFileTreeProps {
  //   items: FileTreeItem[];
  //   level?: number;
  // }

  const renderFileTree = (
    items: FileTreeItem[],
    level: number = 0
  ): React.ReactNode => {
    return items.map((item: FileTreeItem, index: number) => (
      <div key={index} className={`ml-${level * 4}`}>
        {item.type === "folder" ? (
          <div>
            <div
              className="flex items-center py-1 px-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 cursor-pointer rounded"
              onClick={() => toggleFolder(item.name)}
            >
              <FolderOpen className="w-4 h-4 mr-2 text-gray-500 dark:text-whtie" />
              <span className="font-medium">{item.name}</span>
            </div>
            {expandedFolders[item.name] && (
              <div className="ml-4">
                {renderFileTree(item.children, level + 1)}
              </div>
            )}
          </div>
        ) : (
          <div
            className={`flex items-center py-1 px-2 text-sm cursor-pointer rounded ml-4 ${
              selectedFile === item.name
                ? "bg-blue-50 dark:bg-gray-700 dark:text-blue-50 text-blue-700"
                : "text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
            }`}
            onClick={() => selectFile(item.name)}
          >
            <FileText className="w-4 h-4 mr-2 text-gray-500" />
            <span>{item.name}</span>
            {item.active && (
              <div className="w-2 h-2 bg-green-500 rounded-full ml-auto"></div>
            )}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-black">
      {/* Sidebar */}
      <div className="w-80 bg-white dark:bg-accent border rounded border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">AI Scripts</h2>
            <button className="flex items-center text-sm text-blue-600 hover:text-blue-700 font-medium">
              <Plus className="w-4 h-4 mr-1" />
              Add Script
            </button>
          </div>
        </div>

        {/* File Tree */}
        <div className="flex-1 p-4">{renderFileTree(fileStructure)}</div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Editor Header */}
        <div className="bg-white dark:bg-accent border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                prompts/{selectedFile}
              </h3>
              <p className="text-sm text-gray-500 dark:text-white mt-1">
                Last Modified: 2 days ago
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <button className="text-sm text-gray-600 hover:text-gray-900 dark:text-white">
                Save
              </button>
              <div className="flex items-center text-sm text-gray-600 hover:text-gray-900 dark:text-white cursor-pointer">
                <span>Versions (3)</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </div>
              <button className="text-sm text-gray-600 hover:text-gray-900 dark:text-white">
                Test
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                Active
              </button>
            </div>
          </div>
        </div>

        {/* Code Editor */}
        <div className="flex-1 bg-white dark:bg-accent border rounded overflow-hidden">
          <div className="h-full">
            <textarea
              className="w-full h-full p-6 font-mono text-sm text-gray-900 dark:text-white resize-none border-none outline-none"
              value={fileContent[selectedFile] || ""}
              onChange={() => {
                /* Handle content change */
              }}
              style={{
                fontFamily: 'Monaco, Consolas, "Lucida Console", monospace',
              }}
              placeholder="Enter your script content here..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIScriptsInterface;
