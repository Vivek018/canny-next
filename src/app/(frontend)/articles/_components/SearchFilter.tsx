"use client";

import { Input } from "@/common/ui/Input";
import { Dispatch, SetStateAction, useState } from "react";
import { Icons } from "@/libs/Icons";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/common/ui/Select";
import { tags } from "@/constants";

type Props = {
  isLoading: boolean;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  tag: string;
  setTag: Dispatch<SetStateAction<string>>;
  setPage: Dispatch<SetStateAction<number>>;
};

export function SearchFilter({
  isLoading,
  search,
  setSearch,
  setTag,
  tag,
  setPage,
}: Props) {
  const [focused, setFocused] = useState(false);

  const setFocusValue = (value: boolean) => () => setFocused(value);

  return (
    <div className='flex flex-col md:flex-row px-0 w-11/12 md:px-4 gap-4 md:w-full mx-auto my-12'>
      <Input
        Icon={Icons.MangifyingGlass}
        focus={focused}
        placeholder='Search by Title or Author'
        isPending={isLoading}
        value={search}
        onFocus={setFocusValue(true)}
        onBlur={setFocusValue(false)}
        onChange={(e) => {
          e.preventDefault();
          setPage(0);
          setSearch(e.target.value);
        }}
      />
      <Select
        onValueChange={(value) => {
          setPage(0);
          setTag(value);
        }}
        defaultValue={tag}
      >
        <SelectTrigger className='md:w-[400px]'>
          <SelectValue
            placeholder='Select a tag'
            className='placeholder:text-muted-foreground'
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {tags.map((tag, index) => {
              return (
                <SelectItem key={index} value={tag}>
                  {tag}
                </SelectItem>
              );
            })}
            <SelectItem value=''>All of them</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
