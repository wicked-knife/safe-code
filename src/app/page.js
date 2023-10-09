export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-24 pb-24 pr-40 pl-40">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <code className="font-mono font-bold">Safe Code - Your Javascript Code Protector</code>
        </p>
      </div>
      <div className="mt-10">
        <div className="mb-5">Paste your code here: </div>
        <div className="mb-5">
          <textarea rows="10" cols="30" className="text-black w-full" />
        </div>
        <div className="mb-5 flex items-center justify-start">
          <div>Or upload your Javascript file here: </div>
          <div>
            <label htmlFor="fileUpload">
              <div className="ml-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow cursor-pointer">Click to upload</div>
            </label>
          </div>
          <div>
            <input type="file" className="hidden" id="fileUpload" name="fileUpload" accept=".js" />
          </div>
        </div>
      </div>
    </main>
  )
}
